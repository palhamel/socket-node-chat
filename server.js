const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

const io = require('socket.io')(server)

const path = require('path')

app.use(express.static(path.join(__dirname + '/public'))) // express.static to serve the static file index.html.

// app.get('/', (req, res) => res.send('🤖 Hello Server here!'))

io.on('connection', socket => {
  console.log('🥳 client connected')
  // listen to any message sent by the client:
  socket.on('chat', message => { 
    console.log('From client:', message)
    io.emit('chat', message) // send message to ALL connected clients
  })
})



server.listen(port, () => console.log(`✅ Server running on localhost:${port}!`))
/**
 * The server.listen is used to bootstrap the server by passing a valid port. 
 * Generally, in an Express app, you'd find app.listen() instead of server.listen() but that is not the case in apps consuming Socket.io.
 * */
 