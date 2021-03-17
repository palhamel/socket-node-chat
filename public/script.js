// init socketIO
const socket = io()

// prevent page reload:
const chat = document.querySelector('.chat-form')
// read input value and send via socketIO
const input = document.querySelector('.chat-input')

// chat.addEventListener('submit', event => {
//   event.preventDefault()
// })
chat.addEventListener('submit', event => {
  event.preventDefault()
  socket.emit('chat', input.value) // sending data from the client
  input.value = ''
})

