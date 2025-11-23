import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

try:
    model = genai.GenerativeModel("gemini-3-pro-preview")
    response = model.generate_content("Say 'API Key is working'")
    print(f"Success: {response.text}")
except Exception as e:
    print(f"Error: {e}")
