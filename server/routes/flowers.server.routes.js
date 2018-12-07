var flowers = require('../controllers/flowers.server.controller.js'),
    express = require('express'),
    router = express.Router();

// when a GET request is made to the '/api/flowers/', call flowers.all method
// defined in '../controllers/flowers.server.controller.js'

// when a POST request is made to the '/api/flowers/', call flowers.create method
// defined in '../controllers/flowers.server.controller.js'

router.route('/')
    .get(flowers.all);

// somehow we have to update a selected flower...

module.exports = router;

