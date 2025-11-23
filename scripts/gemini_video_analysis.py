import google.generativeai as genai
import time
import os
import sys
import json
from pathlib import Path

# Configuração
# Defina sua API KEY aqui ou via variável de ambiente GOOGLE_API_KEY
# os.environ["GOOGLE_API_KEY"] = "SUA_API_KEY_AQUI"

def setup_gemini():
    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("Erro: Variável de ambiente GOOGLE_API_KEY não encontrada.")
        print("Por favor, defina 'set GOOGLE_API_KEY=sua_chave' no terminal antes de rodar.")
        sys.exit(1)
    
    genai.configure(api_key=api_key)

def upload_and_process_video(video_path):
    print(f"--- Iniciando upload de: {video_path} ---")
    video_file = genai.upload_file(path=video_path)
    print(f"Upload concluído. URI: {video_file.uri}")
    
    # Aguardar processamento do vídeo pelo Google
    while video_file.state.name == "PROCESSING":
        print("Processando vídeo nos servidores do Google... aguarde.")
        time.sleep(5)
        video_file = genai.get_file(video_file.name)
        
    if video_file.state.name == "FAILED":
        raise ValueError("O processamento do vídeo falhou.")
        
    print(f"Vídeo pronto. Estado: {video_file.state.name}")
    return video_file

def analyze_video(video_file, prompt_type="dense"):
    # Escolhendo o modelo. Gemini 1.5 Pro é ideal para vídeo longo e análise multimodal.
    model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest")
    
    prompts = {
        "dense": """
            Analise este vídeo frame a frame com extrema atenção aos detalhes.
            Gere um relatório estruturado cronologicamente.
            
            Para cada segmento relevante (mudança de cena, ação, ou a cada 2-5 segundos se for contínuo), forneça:
            1. Timestamp (Início - Fim)
            2. Descrição Visual Macro: O que está acontecendo no geral.
            3. Detalhes Micro: Expressões faciais, micro-movimentos, detalhes de fundo, texto na tela.
            4. Análise de Objetos: Liste objetos chave presentes e sua interação.
            5. Contexto/Sentimento: A "vibe", emoção ou intenção da cena.
            
            Se houver áudio/fala, transcreva e correlacione com a expressão visual.
            Saída em formato Markdown estruturado.
        """,
        "micro_expressions": """
            Foque exclusivamente em expressões faciais e linguagem corporal humana neste vídeo.
            Identifique micro-expressões (emoções fugazes), contato visual, postura e gestos.
            Crie uma linha do tempo detalhada de cada mudança emocional perceptível.
        """
    }
    
    selected_prompt = prompts.get(prompt_type, prompts["dense"])
    
    print("--- Enviando prompt para o Gemini 1.5 Pro ---")
    print("Isso pode levar alguns minutos dependendo da complexidade...")
    
    # O Gemini 1.5 aceita o arquivo de vídeo nativamente no request
    response = model.generate_content(
        [video_file, selected_prompt],
        request_options={"timeout": 600} # Timeout maior para vídeos longos
    )
    
    return response.text

def main():
    if len(sys.argv) < 2:
        print("Uso: python gemini_video_analysis.py <caminho_do_video> [tipo_prompt]")
        print("Tipos de prompt: dense, micro_expressions")
        return

    video_path = sys.argv[1]
    prompt_type = sys.argv[2] if len(sys.argv) > 2 else "dense"
    
    if not os.path.exists(video_path):
        print(f"Arquivo não encontrado: {video_path}")
        return

    setup_gemini()
    
    try:
        video_file = upload_and_process_video(video_path)
        analysis = analyze_video(video_file, prompt_type)
        
        output_filename = f"analise_video_{int(time.time())}.md"
        with open(output_filename, "w", encoding="utf-8") as f:
            f.write(analysis)
            
        print(f"\n--- Análise Concluída ---\nSalva em: {output_filename}")
        print("Agora você pode abrir este arquivo no VS Code e usar o Copilot para fazer perguntas sobre ele.")
        
        # Opcional: Deletar o arquivo do servidor do Google para economizar espaço/privacidade
        # genai.delete_file(video_file.name)
        
    except Exception as e:
        print(f"Ocorreu um erro: {e}")

if __name__ == "__main__":
    main()
