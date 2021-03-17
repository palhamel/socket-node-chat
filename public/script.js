// init sockeIO
const socket = io()

// prevent page reload:
const chat = document.querySelector('.chat-form')

chat.addEventListener('submit', event => {
  event.preventDefault()
})

