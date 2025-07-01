# 🎓 SkyBot – AI College Assistant 🤖

SkyBot is an intelligent chatbot designed to help students and visitors learn about a college's facilities, courses, and other important information. It supports multilingual input (English + Hindi), making it accessible to a wider audience.

---

## 🌟 Features

- 🧠 AI-powered college-related responses
- 🗣️ Multilingual support (auto-translates Hindi to English)
- 🎯 Keyword-based question matching
- 🌐 Web interface with Flask backend
- ⚙️ Easy to deploy on Render or any cloud platform

---
![image](https://github.com/user-attachments/assets/6453adc7-a2c1-4299-96bb-9e1d6b5b9d83)

## 📁 Project Structure

```
SkyBot_AI_Assistent/
│
├── app.py                     # Flask application entry point
├── responses.py              # Core logic for generating chatbot responses
├── college_qa_dataset.json   # Dataset for Q&A pairs
├── templates/
│   └── index.html            # Frontend HTML interface
├── static/
│   └── style.css             # (Optional) Add styling here
├── requirements.txt          # All dependencies
└── README.md                 # You're reading it!
```

---

## 🚀 Live Demo

Deployed on Render:  
👉 [https://skybot-ai-assistent-1.onrender.com/](#) *(replace with actual URL)*

---

## 🛠️ Installation

> Prerequisite: Python 3.8–3.12 (Python 3.13 not yet supported by all packages)

```bash
git clone https://github.com/26047306/SkyBot_AI_Assistent.git
cd SkyBot_AI_Assistent
```

### Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # for Linux/Mac
venv\Scripts\activate     # for Windows
```

### Install dependencies:

```bash
pip install -r requirements.txt
```

---

## ▶️ Run Locally

```bash
python app.py
```

Then open your browser and go to:  
`http://localhost:5000`

---

## 📦 Deploy on Render

1. Create a new **Web Service** on [https://render.com](https://render.com)
2. Connect your GitHub repo
3. Set the **Build Command**:
   ```bash
   pip install -r requirements.txt
   ```
4. Set the **Start Command**:
   ```bash
   gunicorn app:app
   ```
5. Set the **Python Version** in a file called `.python-version`:
   ```
   3.12.3
   ```

---

## 📚 Dataset Format (`college_qa_dataset.json`)

```json
[
  {
    "question": "What courses are offered?",
    "answer": "We offer B.Tech, M.Tech, MBA, and Polytechnic programs in various fields."
  },
  {
    "question": "What is the placement record?",
    "answer": "Our placement cell has tie-ups with top companies like TCS, Infosys, and Wipro."
  }
]
```

You can extend this JSON file to add more questions and answers for better coverage.

---

## 🧠 Tech Stack

- Python 3
- Flask
- HTML/CSS (for UI)
- JavaScript (optional frontend enhancements)
- [deep-translator](https://pypi.org/project/deep-translator/) (for Hindi-to-English translation)
- Gunicorn (WSGI server for deployment)

---

## 🔐 Environment Variables (Optional)

If needed, create a `.env` file:

```
PORT=5000
```

---

## 🧪 Sample Chat Usage

> **User:** Namaste! College mein kaun kaun se courses hain?  
> **SkyBot:** We offer B.Tech, M.Tech, MBA, and Polytechnic programs in various fields.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 👨‍💻 Author

**Sandeep Yadav**  
📧 [ravindrayadav4367@gmail.com](mailto:ravindrayadav4367@gmail.com)  
🎓 B.Tech CSE (Data Science), Oriental College of Technology

