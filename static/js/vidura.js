console.log("I am working fine!");
const AUTHOR = "Adarsh Maurya";
console.log(`Author ${AUTHOR}`);

// By chatgpt - needs modifications and might contain errors 

document.addEventListener("DOMContentLoaded", function() {
    const chatForm = document.getElementById("chat-form");
    const userMessage = document.getElementById("message");
    const mainChat = document.getElementById("main-chbot");

    // Function to add a user message to the chat interface
    function addUserMessage(message) {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "user-message";
        userMessageDiv.innerHTML = `<p>${message}</p>`;
        mainChat.appendChild(userMessageDiv);
    }

    // Function to add a bot message to the chat interface
    function addBotMessage(message) {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "bot-message";
        botMessageDiv.innerHTML = `<p>${message}</p>`;
        mainChat.appendChild(botMessageDiv);
    }

    // Handle form submission
    chatForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const userText = userMessage.value;

        // Add the user's message to the chat interface
        addUserMessage(userText);

        // Send the user's message to the server for processing
        fetch("/vidura", {
            method: "POST",
            body: JSON.stringify({ message: userText }),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                const viduraResponse = data.message;
                addBotMessage(viduraResponse);
            });

        // Clear the user input field
        userMessage.value = "";
    });
});
