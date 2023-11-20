console.log("I am working fine!");
const AUTHOR = "Adarsh Maurya";
console.log(`Author ${AUTHOR}`);

// By chatgpt - needs modifications and might contain errors 

// document.addEventListener("DOMContentLoaded", function() {
//     const chatForm = document.getElementById("chat-form");
//     const userMessage = document.getElementById("message");
//     const mainChat = document.getElementById("main-chbot");

//     // Function to add a user message to the chat interface
//     function addUserMessage(message) {
//         const userMessageDiv = document.createElement("div");
//         userMessageDiv.className = "user-message";
//         userMessageDiv.innerHTML = `<p>${message}</p>`;
//         mainChat.appendChild(userMessageDiv);
//     }

//     // Function to add a bot message to the chat interface
//     function addBotMessage(message) {
//         const botMessageDiv = document.createElement("div");
//         botMessageDiv.className = "bot-message";
//         botMessageDiv.innerHTML = `<p>${message}</p>`;
//         mainChat.appendChild(botMessageDiv);
//     }

//     // Handle form submission
//     chatForm.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const userText = userMessage.value;

//         // Add the user's message to the chat interface
//         addUserMessage(userText);

//         // Send the user's message to the server for processing
//         fetch("/vidura", {
//             method: "POST",
//             body: JSON.stringify({ message: userText }),
//             headers: { "Content-Type": "application/json" },
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 const viduraResponse = data.message;
//                 addBotMessage(viduraResponse);
//             });

//         // Clear the user input field
//         userMessage.value = "";
//     });
// });



// For Error message displaying and closing it 
let crossBtn = document.getElementById("cross-btn");
let errorMsgElem = document.getElementById("error-message");

crossBtn.addEventListener("click", function () {
    errorMsgElem.style.display = "none";

})

document.addEventListener("DOMContentLoaded", function () {

    // Setting timeout for n Seconds
    setTimeout(() => {
        if (errorMsgElem) {
            errorMsgElem.style.display = "none";
        }
    }, 5000);


})



const messagesList = document.querySelector('.messages-list');
const messageForm = document.querySelector('.message-form');
const messageInput = document.querySelector('.message-input');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = messageInput.value.trim();
    if (message.length === 0) {
        return;
    }

    const messageItem = document.createElement('li');
    messageItem.classList.add('message', 'sent');
    messageItem.innerHTML = `
      <div class="message-text">
          <div class="message-sender">
              <b>You</b>
          </div>
          <div class="message-content">
              ${message}
          </div>
      </div>`;
    messagesList.appendChild(messageItem);

    messageInput.value = '';

    fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: new URLSearchParams({
            'csrfmiddlewaretoken': document.querySelector('[name=csrfmiddlewaretoken]').value,
            'message': message
        })
    })
        .then(response => response.json())
        .then(data => {
            const response = data.response;
            const messageItem = document.createElement('li');
            messageItem.classList.add('message', 'received');
            messageItem.innerHTML = `
      <div class="message-text">
          <div class="message-sender">
            <b>Vidura AI</b>
          </div>
          <div class="message-content">
              ${response}
          </div>
      </div>
        `;
            messagesList.appendChild(messageItem);
        });
});