



const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');
const typingIndicator = document.getElementById('typingIndicator');


async function getResponse() {
const response = await fetch('https://api.featherless.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer FEATHERLESS_API_KEY'
  },
  body: JSON.stringify({
    model: 'Qwen/Qwen2.5-7B-Instruct',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Hello! How are you?' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);
}