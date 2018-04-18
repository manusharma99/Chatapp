
var socket = io();
socket.on('connect', () => {
  console.log('connected to server');

  // socket.on('welcome', () => {
  //   console.log(`${from}`)
  // })

});
socket.on('disconnect', () => {
  console.log('disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('message is',message);
})

socket.emit('createMessage', {
  from:'User',
  text:req.body.message
},
function()  {
  console.log('message sent');
});
