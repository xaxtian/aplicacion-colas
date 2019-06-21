var socket = io();

socket.on('connect', function() {
    console.log('conectado')
})

socket.on('disconnect', function() {
    console.log('desconectado')
});

socket.on('estadoActual', function(msj) {
    console.log('estado actual: ', msj);
    label.textContent = msj.actual;
});

function createNewTicket() {
    socket.emit('nuevoTicket', {}, function(resp) {
        console.log(resp);
        label.textContent = resp;
    })
}