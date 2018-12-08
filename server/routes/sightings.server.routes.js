var sightings = require('../controllers/sightings.server.controller.js'),
    express = require('express'),
    router = express.Router();

// when a GET request is made to the '/api/flowers/', call flowers.all method
// defined in '../controllers/flowers.server.controller.js'

// when a POST request is made to the '/api/flowers/', call flowers.create method
// defined in '../controllers/flowers.server.controller.js'

router.route('/')
    .get(sightings.recents);

router.route('/recents/:flowerName')
    .get(sightings.recents);

router.param('flowerName', sightings.attachName);
module.exports = router;

