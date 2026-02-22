


FEATHERLESS_API_KEY = 'rc_bceae46183539e4682a6f942769ba929ad04400c8bb86da06ba705a26a85b6ae'
const messageInput = document.getElementById('messageInput').value.trim();
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');
const typingIndicator = document.getElementById('typingIndicator');
const response = document.getElementById('response');

sendButton.onclick = () =>{
    console.log("clicked");
    getResponse();
}

async function getResponse() {
const response = await fetch('https://api.featherless.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${FEATHERLESS_API_KEY}`
  },
  body: JSON.stringify({
    model: 'Qwen/Qwen2.5-7B-Instruct',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: messageInput }
    ]
  })
});

const data = await response.json();
response.innerHTML = data.choices[0].message.content;
console.log(data.choices[0].message.content);
}