import json
import os
import re
import random
from deep_translator import GoogleTranslator

# === Load dataset ===
file_path = os.path.join(os.path.dirname(__file__), "college_qa_dataset.json")
with open(file_path, "r", encoding="utf-8") as f:
    qa_data = json.load(f)

# === Translator setup ===
translator = GoogleTranslator(source='auto', target='en')

# === Clean user input ===
def clean_text(text):
    return re.sub(r"[^\w\s]", "", text.lower())

# === Get chatbot response ===
def get_response(user_input):
    try:
        # Translate to English (if not already)
        user_input = translator.translate(user_input)
    except:
        pass  # Ignore translation errors silently

    user_input_clean = clean_text(user_input)

    # ✅ Greet if user says hello
    greetings = ["hello", "hi", "hey", "good morning", "good evening", "namaste"]
    if any(greet in user_input_clean for greet in greetings):
        return random.choice([
            "Hello! 👋 How can I help you today?",
            "Hi there! 😊 Need any assistance?",
            "Hey! What would you like to know about the college?",
            "Namaste! 🙏 How can I assist you today?"
        ])

    # ✅ Check for match in dataset
    for item in qa_data:
        question_clean = clean_text(item["question"])
        if any(word in question_clean for word in user_input_clean.split()):
            return item["answer"]

    # ❌ No match found
    return "❗I'm not sure about that. Please ask a question related to the college."
