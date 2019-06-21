var socket = io();

socket.on('connect', function() {
    console.log('conectado')
})

socket.on('disconnect', function() {
    console.log('desconectado')
});

function attendNewTicket(escritorio) {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);
        label.textContent = resp;
    })
}