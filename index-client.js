const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:true,
    origins:["http://127.0.0.1:8000"],
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    socket.on("update server",(msg)=>{
        socket.emit("update",msg)
    })
    console.log('a user connected');
});

http.listen(3000, () => {
    console.log('listening on *:3001');
});