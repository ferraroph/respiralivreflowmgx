import os
import time
import sys
import re
import google.generativeai as genai
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(override=True)

# Configuração do Modelo
MODEL_NAME = "gemini-3-pro-preview" 

def get_output_paths(video_path, group_name=None):
    """
    Define a estrutura de pastas:
    Output Root: .../docs/analises/output/NOME_DA_PASTA_INPUT/
    
    Estrutura Interna:
    /raw/NOME_VIDEO/brute_video_NOME.md
    /raw/NOME_VIDEO/brute_audio_NOME.md
    /final/analise_lapidada_NOME.md
    """
    video_path = Path(video_path).resolve()
    
    # Tenta encontrar a raiz 'docs/analises/input'
    try:
        parts = video_path.parts
        if 'input' in parts:
            input_index = parts.index('input')
            if input_index > 1 and parts[input_index-1] == 'analises':
                # Base: .../docs/analises/output
                base_output_dir = Path(*parts[:input_index]).joinpath('output')
                
                # Subpasta do projeto (ex: analise funil 2)
                relative_path = video_path.relative_to(Path(*parts[:input_index+1]))
                project_folder = relative_path.parts[0] # ex: "analise funil 2"
                
                project_output_dir = base_output_dir.joinpath(project_folder)
                
                # Nome base para o vídeo/grupo
                if group_name:
                    safe_name = re.sub(r'[^\w\s-]', '', group_name).strip().replace(' ', '_')
                else:
                    safe_name = video_path.stem

                # Caminhos RAW
                raw_dir = project_output_dir.joinpath('raw', safe_name)
                raw_video_path = raw_dir.joinpath(f"brute_video_{safe_name}.md")
                raw_audio_path = raw_dir.joinpath(f"brute_audio_{safe_name}.md")
                
                # Caminho Final (Lapidado)
                # Alteração: Salvar diretamente na pasta do projeto, sem subpasta 'final'
                final_dir = project_output_dir
                final_path = final_dir.joinpath(f"analise_lapidada_{safe_name}.md")
                
                return raw_dir, raw_video_path, raw_audio_path, final_dir, final_path
    except ValueError:
        pass

    # Fallback
    print(f"Aviso: Estrutura de pastas fora do padrão. Usando local relativo.")
    fallback_dir = video_path.parent.joinpath('output_analysis')
    safe_name = video_path.stem
    return (
        fallback_dir.joinpath('raw', safe_name),
        fallback_dir.joinpath('raw', safe_name, f"brute_video_{safe_name}.md"),
        fallback_dir.joinpath('raw', safe_name, f"brute_audio_{safe_name}.md"),
        fallback_dir,
        fallback_dir.joinpath(f"analise_lapidada_{safe_name}.md")
    )

def upload_and_wait(video_path):
    print(f"--- Uploading: {video_path.name} ---")
    try:
        video_file = genai.upload_file(path=video_path)
        print(f"Upload concluído. URI: {video_file.uri}")
        
        print("Aguardando processamento...")
        while video_file.state.name == "PROCESSING":
            print(".", end="", flush=True)
            time.sleep(2)
            video_file = genai.get_file(video_file.name)
            
        if video_file.state.name == "FAILED":
            raise Exception("Falha no processamento do arquivo pelo Google (State=FAILED).")
            
        print(f"\nPronto.")
        return video_file
    except Exception as e:
        print(f"\nERRO CRÍTICO NO UPLOAD: {e}")
        print("Abortando execução para evitar erros em cascata.")
        sys.exit(1)

def generate_content_safe(model, contents, retries=3):
    for attempt in range(retries):
        try:
            response = model.generate_content(
                contents,
                request_options={"timeout": 600}
            )
            return response.text
        except Exception as e:
            print(f"\nErro na geração (tentativa {attempt+1}/{retries}): {e}")
            if "API_KEY_INVALID" in str(e) or "API key expired" in str(e) or "403" in str(e):
                 print("ERRO DE API KEY DETECTADO. ABORTANDO IMEDIATAMENTE.")
                 sys.exit(1)
            time.sleep(5)
    
    print("Falha após todas as tentativas. Abortando.")
    sys.exit(1)

def analyze_video_group(group_key, video_files):
    if not os.getenv("GOOGLE_API_KEY"):
        print("Erro: GOOGLE_API_KEY não definida.")
        return

    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
    # Usando o modelo solicitado
    model = genai.GenerativeModel(model_name=MODEL_NAME) 

    sorted_videos = sorted(video_files, key=lambda p: p.name)
    
    # Nome do grupo
    first_video = sorted_videos[0]
    clean_name = re.sub(r'^[\d\.]+[_\-\s]*', '', first_video.stem)
    if not clean_name: clean_name = f"Grupo_{group_key}"
    final_group_name = f"{group_key}_{clean_name}"
    
    # Obter caminhos
    raw_dir, raw_video_path, raw_audio_path, final_dir, final_path = get_output_paths(first_video, final_group_name)
    
    # Criar diretórios
    raw_dir.mkdir(parents=True, exist_ok=True)
    final_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n=== Processando Grupo {group_key}: {clean_name} ===")
    print(f"RAW Video: {raw_video_path}")
    print(f"RAW Audio: {raw_audio_path}")
    print(f"FINAL: {final_path}")

    full_video_raw = ""
    full_audio_raw = ""

    for i, video_path in enumerate(sorted_videos):
        print(f"\n--- Parte {i+1}/{len(sorted_videos)}: {video_path.name} ---")
        
        video_file = upload_and_wait(video_path)
        if not video_file: continue

        # 1. Análise Visual Bruta (Frame a Frame / Cena)
        print("-> Gerando Análise Visual Bruta...")
        prompt_video = """
        ATUE COMO UM ESPECIALISTA EM VISÃO COMPUTACIONAL E ANÁLISE FORENSE.
        
        Tarefa: Análise visual EXTREMAMENTE DETALHADA, frame a frame, cena a cena.
        
        Gere um log técnico estruturado contendo:
        1. TIMESTAMPS precisos.
        2. DESCRIÇÃO VISUAL PURA: O que está na tela? Objetos, cores, iluminação, layout.
        3. MICRO-EXPRESSÕES: Se houver humanos, descreva cada mudança facial mínima.
        4. OCR: Transcreva todo texto que aparecer na tela.
        5. MUDANÇAS DE CONTEXTO: Quando a cena muda? O que mudou?
        
        NÃO ANALISE O ÁUDIO AINDA. FOQUE 100% NO VISUAL.
        SEJA PROLIXO NOS DETALHES VISUAIS.
        """
        video_response = generate_content_safe(model, [video_file, prompt_video])
        if video_response:
            full_video_raw += f"## Parte {i+1} - Visual\n{video_response}\n\n"
        
        # 2. Análise de Áudio Bruta (Engenharia de Som / Ouvido Absoluto)
        print("-> Gerando Análise de Áudio Bruta...")
        prompt_audio = """
        ATUE COMO UM ENGENHEIRO DE ÁUDIO E MÚSICO COM OUVIDO ABSOLUTO.
        
        Tarefa: Análise auditiva EXTREMAMENTE DETALHADA.
        
        Gere um log técnico estruturado contendo:
        1. TIMESTAMPS precisos.
        2. CAMADAS DE ÁUDIO: Separe voz, música de fundo, efeitos sonoros (SFX), ruídos ambientes.
        3. ANÁLISE VOCAL: Tom de voz, entonação, pausas, respiração, emoção na voz.
        4. ANÁLISE MUSICAL: Se houver música, qual o gênero? Instrumentos? Tempo? Emoção que passa?
        5. QUALIDADE TÉCNICA: Há distorção? Eco? Mudança de volume?
        
        IGNORE O VISUAL. FOQUE 100% NO QUE SE OUVE.
        """
        audio_response = generate_content_safe(model, [video_file, prompt_audio])
        if audio_response:
            full_audio_raw += f"## Parte {i+1} - Áudio\n{audio_response}\n\n"

    # Salvar RAWs
    with open(raw_video_path, "w", encoding="utf-8") as f: f.write(full_video_raw)
    with open(raw_audio_path, "w", encoding="utf-8") as f: f.write(full_audio_raw)

    # 3. Verificação e Lapidação (O "Checklist Foda")
    print("\n-> Realizando Verificação Cruzada e Lapidação Final...")
    
    # Para a lapidação, passamos os textos brutos gerados para o modelo processar
    # Isso evita ter que re-enviar o vídeo e economiza tokens de vídeo, usando tokens de texto (mais baratos/rápidos)
    # Mas para garantir a factualidade, o ideal seria o modelo ter o vídeo E o texto.
    # Como o vídeo ainda está no cache (se não expirou), podemos tentar usar o último video_file ou apenas o texto se for muito longo.
    # Vamos usar apenas o texto RAW para consolidar, assumindo que a extração bruta foi boa.
    
    prompt_final = f"""
    ATUE COMO UM DIRETOR DE CINEMA E ANALISTA DE DADOS SÊNIOR.
    
    Você tem em mãos dois relatórios brutos de análise técnica (Visual e Áudio) de um vídeo.
    
    INPUTS:
    --- INICIO RELATÓRIO VISUAL ---
    {full_video_raw[:50000]} 
    --- FIM RELATÓRIO VISUAL ---
    
    --- INICIO RELATÓRIO ÁUDIO ---
    {full_audio_raw[:50000]}
    --- FIM RELATÓRIO ÁUDIO ---
    (Nota: Os inputs podem estar truncados se forem gigantescos, foque no que tem).
    
    TAREFA:
    1. VERIFICAÇÃO DE COERÊNCIA: O áudio bate com o visual? (Ex: Boca mexendo sem voz, ou som de explosão sem fogo).
    2. CRIAÇÃO DO DOCUMENTO FINAL "LAPIDADO":
       - Crie uma narrativa cronológica unificada.
       - Para cada momento, descreva a EXPERIÊNCIA COMPLETA (O que se vê + O que se ouve).
       - Destaque pontos de atenção, falhas, ou momentos de brilhantismo.
       - Use uma estrutura profissional e fácil de ler.
    
    O OBJETIVO É TER UMA ANÁLISE QUE PERMITA RECONSTRUIR O VÍDEO MENTALMENTE SEM ASSISTI-LO.
    """
    
    # Usando o modelo apenas com texto agora para consolidar
    final_response = generate_content_safe(model, [prompt_final])
    
    if final_response:
        with open(final_path, "w", encoding="utf-8") as f:
            f.write(f"# Análise Lapidada: {final_group_name}\n\n{final_response}")
        print(f"Sucesso! Análise Final salva em: {final_path}")
    else:
        print("Erro ao gerar análise final.")

def process_input(input_path):
    path = Path(input_path)
    if not path.exists():
        print("Caminho não encontrado.")
        return

    # Coletar vídeos
    videos = []
    if path.is_file():
        videos = [path]
    else:
        video_extensions = {'.mp4', '.mov', '.avi', '.mkv', '.webm'}
        videos = [p for p in path.rglob('*') if p.suffix.lower() in video_extensions]
    
    if not videos:
        print("Nenhum vídeo encontrado.")
        return

    # Agrupar
    groups = {}
    for video in videos:
        match = re.match(r'^(\d+)', video.name)
        key = match.group(1) if match else "ungrouped"
        if key not in groups: groups[key] = []
        groups[key].append(video)

    # Executar
    for key, video_list in groups.items():
        if key == "ungrouped":
            for v in video_list: analyze_video_group(v.stem, [v])
        else:
            analyze_video_group(key, video_list)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        default_input = Path("docs/analises/input")
        if default_input.exists():
            process_input(default_input)
        else:
            print("Uso: python analyze_video_dense.py <caminho>")
    else:
        process_input(sys.argv[1])
