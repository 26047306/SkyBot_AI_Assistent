from flask import Flask, render_template, request, jsonify
from responses import get_response  # only this, no save_new_data

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message")

    response = get_response(user_input)

    if response is None:
        return jsonify({
            "response": "❗I'm not sure about that. Please ask a question related to the college."
        })

    return jsonify({"response": response})

import os

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))

