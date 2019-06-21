var socket = io();

socket.on('connect', function() {
    console.log('conectado')
})

socket.on('disconnect', function() {
    console.log('desconectado')
});

function initListening(listaEscritorios, listaTickets) {
    socket.on('estadoActual', function(msj) {
        if (msj.ultimos4) {
            fillLabels(listaEscritorios, listaTickets, msj.ultimos4);
        }
    });
}

function fillLabels(_desktopLabelList, _ticketLabelList, last4) {
    for (var i = 0; i < last4.length; i++) {
        _desktopLabelList[i].textContent = "Escritorio: " + last4[i].escritorio;
        _ticketLabelList[i].textContent = "Ticket: " + last4[i].numero;
    }
}