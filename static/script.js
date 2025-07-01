const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const micBtn = document.getElementById("mic-btn");

// 🔄 Auto-scroll to latest message
function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 💬 Append messages to chat box
function addMessage(message, type) {
  const msg = document.createElement("div");
  msg.className = type === "user" ? "user-message" : "bot-message";
  msg.innerText = message;
  chatBox.appendChild(msg);
  scrollToBottom();
}

// 📤 Send message to backend
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";
  userInput.disabled = true;
  sendBtn.disabled = true;

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    addMessage(data.response, "bot");
  } catch (err) {
    console.error("❌ Error:", err);
    addMessage("⚠️ Something went wrong!", "bot");
  }

  userInput.disabled = false;
  sendBtn.disabled = false;
  userInput.focus();
}

// 🎤 Voice input using SpeechRecognition
function startVoiceInput() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice recognition not supported in this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-IN"; // You can change to "en-US" for English
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    userInput.value = transcript;
    sendMessage();
  };

  recognition.onerror = (event) => {
    console.error("Voice input error:", event.error);
    addMessage("⚠️ Voice input error. Try again.", "bot");
  };
}

// 🔘 Event Listeners
sendBtn.addEventListener("click", sendMessage);
micBtn.addEventListener("click", startVoiceInput);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
