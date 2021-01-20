const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:{
        origin:'*'
    }
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

http.listen(3001, () => {
    console.log('listening on *:3000');
});