import os
import time
import sys
import google.generativeai as genai
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# Configuração
# A chave agora é carregada automaticamente do arquivo .env via load_dotenv()

def analyze_video(video_path, prompt_type="dense"):
    if not os.getenv("GOOGLE_API_KEY"):
        print("Erro: A variável de ambiente GOOGLE_API_KEY não está definida.")
        print("Defina com: $env:GOOGLE_API_KEY='sua_chave'")
        return

    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    video_file_path = Path(video_path)
    if not video_file_path.exists():
        print(f"Erro: Arquivo não encontrado: {video_path}")
        return

    print(f"--- Iniciando upload de: {video_file_path.name} ---")
    
    # 1. Upload do vídeo para a File API
    video_file = genai.upload_file(path=video_file_path)
    print(f"Upload concluído. URI: {video_file.uri}")

    # 2. Aguardar processamento (o Google precisa processar o vídeo antes de usar)
    print("Aguardando processamento do vídeo no servidor...")
    while video_file.state.name == "PROCESSING":
        print(".", end="", flush=True)
        time.sleep(2)
        video_file = genai.get_file(video_file.name)

    if video_file.state.name == "FAILED":
        print("\nO processamento do vídeo falhou.")
        return

    print(f"\nVídeo pronto. Estado: {video_file.state.name}")

    # 3. Configurar o Modelo (Gemini 1.5 Pro é o melhor para vídeo atualmente disponível na API pública)
    # O 'Gemini 3 Pro' que você vê no VS Code pode ser uma preview interna, mas na API usamos o 1.5 Pro ou Flash
    # que tem janela de contexto de 1M+ tokens.
    model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest")

    # 4. Definir o Prompt Baseado na Intensidade
    base_prompt = """
    Você é um especialista em análise forense de vídeo e visão computacional.
    Analise este vídeo com precisão extrema. Não perca nenhum detalhe.
    """

    if prompt_type == "dense":
        prompt = base_prompt + """
        Gere um relatório CRONOLÓGICO DETALHADO (Timestamp a Timestamp).
        Para cada segmento ou evento visual relevante:
        1. Timestamp exato.
        2. Descrição visual densa (objetos, cores, iluminação, posição).
        3. Micro-expressões faciais ou linguagem corporal (se houver humanos).
        4. Texto visível (OCR) ou elementos de interface.
        5. Contexto macro (o que está acontecendo na cena geral).
        
        Seja técnico e exaustivo.
        """
    else:
        prompt = base_prompt + f"\n{prompt_type}"

    print("\n--- Iniciando Análise (isso pode levar um minuto dependendo da complexidade) ---")
    
    # Chamada ao modelo passando o objeto de vídeo
    response = model.generate_content(
        [video_file, prompt],
        request_options={"timeout": 600} # Timeout maior para vídeos longos
    )

    # Salvar relatório
    output_filename = f"analise_{video_file_path.stem}.md"
    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(f"# Análise de Vídeo: {video_file_path.name}\n\n")
        f.write(response.text)

    print(f"\nAnálise concluída! Relatório salvo em: {output_filename}")
    
    # Limpeza (opcional, deletar do servidor do Google para não ocupar espaço na cota)
    # genai.delete_file(video_file.name)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python analyze_video_dense.py <caminho_do_video> [tipo_prompt]")
    else:
        v_path = sys.argv[1]
        p_type = sys.argv[2] if len(sys.argv) > 2 else "dense"
        analyze_video(v_path, p_type)
