const Flight = require('../models/flight')

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        // We can push subdocs into mongoose arrays
        flight.destinations.push(req.body)
            // save any changes to the parent doc
        flight.save(function(err) {
            // Respond to the request in this case, we'll redirect
            res.redirect(`/flights/${flight._id}`)
        })
    })
}