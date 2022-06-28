const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    create,
    new: newTicket,
};

function create(req, res) {
    const flightId = req.params.id
    req.body.flight = flightId
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${flightId}`)
    })
}

function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id })
}