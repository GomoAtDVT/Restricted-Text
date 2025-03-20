const messageContainer = document.querySelector('.message-container');
const messageInput = document.getElementById('message');
const restrictionNumber = document.querySelector('.restriction-number');
let wordCount = 0;

messageInput.addEventListener('input', () => {
    const message = messageInput.value;
    wordCount = message.split('').length;
    restrictionNumber.innerHTML = `${wordCount} / 250`;

        if (wordCount == 250) {
            messageInput.value = message.split(' ').join(' ');
            messageContainer.classList.add('error');
            restrictionNumber.innerHTML = `excceeded character count ${wordCount} / 250`;
        }else{
            messageContainer.classList.remove('error');
        }
});
  