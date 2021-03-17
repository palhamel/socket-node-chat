const express = require('express')

const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello Server!'))

server.listen(port, () => console.log(`✅ Server running on port ${port}!`))

/**
 * The server.listen is used to bootstrap the server by passing a valid port. 
 * Generally, in an Express app, you'd find app.listen() instead of server.listen() but that is not the case in apps consuming Socket.io.
 * */
