const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('nuevoTicket', (msj, callback) => {
        let msjSiguiente = ticketControl.siguiente();
        console.log('siguiente ticket', msjSiguiente);
        callback(msjSiguiente);
    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });

    client.on('atenderTicket', (msj, callback) => {
        if (!msj.escritorio) {
            return callback({
                err: true,
                mensaje: 'escritorio necesario'
            })
        }
        let msjSiguiente = ticketControl.atenderTicket(msj.escritorio);
        console.log('atendiendo ticket', msjSiguiente);

        client.broadcast.emit('estadoActual', {
            actual: ticketControl.getUltimoTicket(),
            ultimos4: ticketControl.getUltimos4()
        });
        callback(msjSiguiente);
    });

});