const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:true,
    origins:["http://172.16.4.247:8000"],
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    socket.on("pushNotification",(msg)=>{
        console.log("from web to android ",msg)
        socket.broadcast.emit("androidPushNotification",msg)
    })
    console.log("user has connect")
});
io.on("disconnect",(socket)=>{
    console.log("asd")
})

http.listen(3000, () => {
    console.log('listening on *:3000');
});