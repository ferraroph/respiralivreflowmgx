import os
import time
import sys
import google.generativeai as genai
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

def get_output_path(video_path):
    """
    Determina o caminho de saída baseado na estrutura de pastas exigida:
    Input: .../docs/analises/input/NOME_DA_PASTA/video.mp4
    Output: .../docs/analises/output/NOME_DA_PASTA/analise_<nome_video>.md
    """
    video_path = Path(video_path).resolve()
    
    # Tenta encontrar o padrão 'docs/analises/input' no caminho
    try:
        parts = video_path.parts
        if 'input' in parts:
            input_index = parts.index('input')
            # Verifica se estamos dentro de docs/analises (opcional, mas bom para segurança)
            if input_index > 1 and parts[input_index-1] == 'analises' and parts[input_index-2] == 'docs':
                # A pasta "pai" do vídeo é o elemento logo após 'input'
                # Ex: .../input/analise funil 1/video.mp4 -> parent_folder = "analise funil 1"
                # Se o vídeo estiver diretamente em input, isso pode falhar ou ser vazio, vamos tratar.
                
                relative_path = video_path.relative_to(Path(*parts[:input_index+1]))
                # relative_path agora é "analise funil 1/video.mp4"
                
                # Construir o caminho de output substituindo 'input' por 'output' na base
                base_output_dir = Path(*parts[:input_index]).joinpath('output')
                
                # O arquivo de saída mantém a estrutura de subpastas encontrada dentro de input
                output_file_dir = base_output_dir.joinpath(relative_path.parent)
                output_file_name = f"analise_{video_path.stem}.md"
                
                return output_file_dir, output_file_dir.joinpath(output_file_name)
    except ValueError:
        pass

    # Fallback: Se não seguir a estrutura, salva na mesma pasta do vídeo ou numa pasta 'output' local
    print(f"Aviso: O vídeo {video_path.name} não está na estrutura padrão docs/analises/input.")
    fallback_dir = video_path.parent.joinpath('output_analysis')
    return fallback_dir, fallback_dir.joinpath(f"analise_{video_path.stem}.md")

def analyze_video(video_path, prompt_type="dense"):
    if not os.getenv("GOOGLE_API_KEY"):
        print("Erro: A variável de ambiente GOOGLE_API_KEY não está definida.")
        return

    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    video_file_path = Path(video_path)
    if not video_file_path.exists():
        print(f"Erro: Arquivo não encontrado: {video_path}")
        return

    # Determinar e criar diretório de saída
    output_dir, output_file_path = get_output_path(video_file_path)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"--- Processando: {video_file_path.name} ---")
    print(f"--- Output será salvo em: {output_file_path} ---")

    print(f"Iniciando upload...")
    
    # 1. Upload do vídeo para a File API
    try:
        video_file = genai.upload_file(path=video_file_path)
    except Exception as e:
        print(f"Erro no upload: {e}")
        return

    print(f"Upload concluído. URI: {video_file.uri}")

    # 2. Aguardar processamento
    print("Aguardando processamento do vídeo no servidor...")
    while video_file.state.name == "PROCESSING":
        print(".", end="", flush=True)
        time.sleep(2)
        video_file = genai.get_file(video_file.name)

    if video_file.state.name == "FAILED":
        print("\nO processamento do vídeo falhou.")
        return

    print(f"\nVídeo pronto. Estado: {video_file.state.name}")

    # 3. Configurar o Modelo
    model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest")

    # 4. Definir o Prompt
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

    print("\n--- Gerando Análise... ---")
    
    try:
        response = model.generate_content(
            [video_file, prompt],
            request_options={"timeout": 600}
        )
        
        with open(output_file_path, "w", encoding="utf-8") as f:
            f.write(f"# Análise de Vídeo: {video_file_path.name}\n\n")
            f.write(response.text)

        print(f"\nSucesso! Relatório salvo em: {output_file_path}")
        
    except Exception as e:
        print(f"\nErro na geração: {e}")

def process_input(input_path, prompt_type="dense"):
    path = Path(input_path)
    if path.is_file():
        analyze_video(path, prompt_type)
    elif path.is_dir():
        print(f"Varrendo diretório: {path}")
        video_extensions = {'.mp4', '.mov', '.avi', '.mkv', '.webm'}
        videos = [p for p in path.rglob('*') if p.suffix.lower() in video_extensions]
        
        if not videos:
            print("Nenhum vídeo encontrado neste diretório.")
            return

        for video in videos:
            analyze_video(video, prompt_type)
    else:
        print("Caminho inválido.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        # Se nenhum argumento for passado, tenta usar o diretório padrão docs/analises/input
        default_input = Path("docs/analises/input")
        if default_input.exists():
            print(f"Nenhum argumento passado. Usando padrão: {default_input}")
            process_input(default_input)
        else:
            print("Uso: python analyze_video_dense.py <caminho_do_video_ou_pasta> [tipo_prompt]")
    else:
        v_path = sys.argv[1]
        p_type = sys.argv[2] if len(sys.argv) > 2 else "dense"
        process_input(v_path, p_type)
