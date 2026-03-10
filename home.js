const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const publishBtn = document.getElementById("publishBtn");

const messages = JSON.parse(localStorage.getItem("messages") || "[]");
renderMessages();

publishBtn.addEventListener("click", addMessage);

function addMessage() {
    const text = messageInput.value.trim();
    if (!text) {
        return;
    }

    messages.push({
        text,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("messages", JSON.stringify(messages));
    messageInput.value = "";
    renderMessages();
}

function renderMessages() {
    messagesDiv.innerHTML = "";
    messages.forEach((msg) => {
        const div = document.createElement("div");
        div.className = "message";
        div.innerHTML = `<strong>${msg.date}</strong><br>${msg.text}`;
        messagesDiv.appendChild(div);
    });
}
