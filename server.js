const express = require('express')

const app = express()
const http = require('http').createServer(app)


const PORT = process.env.PORT || 3000

http.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

const io = require('socket.io')(http)
var users = {};
io.on('connection',(socket) =>{
    console.log('Connected...')
    // socket.on('message',(msg)=>{
    //     socket.broadcast.emit('message',msg)
    // });
    socket.on('new-user-joined',name1=>{
        users[socket.id]=name1;
        console.log(users);
        socket.broadcast.emit('user-connected',name1);
        io.emit("user-list",users);
    });
    socket.on('disconnect',()=>{
        socket.broadcast.emit('user-disconnected',user5=users[socket.id]);
        delete users[socket.id];
        io.emit("user-list",users);
    });
    socket.on('message',(data)=>{
        socket.broadcast.emit("message",data);
    });
});