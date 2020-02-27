const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const cors = require('cors')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-lmjul.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// mongoose.connect('mongodb://localhost:27017/omnistack10', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)