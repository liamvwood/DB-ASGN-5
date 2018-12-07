var flowers = require('../controllers/flowers.server.controller.js'),
    express = require('express'),
    reouter = express.Router;

// when a GET request is made to the '/api/flowers/', call flowers.all method
// defined in '../controllers/flowers.server.controller.js'

// when a POST request is made to the '/api/flowers/', call flowers.create method
// defined in '../controllers/flowers.server.controller.js'

router.route('/')
    .get(flowers.all)
    .post(flowers.create);


router.route('/:flowerId')
    .get(flowers.recents)
    .put(flowers.update);

/*
  The 'router.param' method allows us to specify middleware we would like to use to handle 
  requests with a parameter.

  Say we make an example request to '/flowers/566372f4d11de3498e2941c9'

  The request handler will first find the specific listing using this 'listingsById' 
  middleware function by doing a lookup to ID '566372f4d11de3498e2941c9' in the Mongo database, 
  and bind this listing to the request object.

  It will then pass control to the routing function specified above, where it will either 
  get, update, or delete that specific listing (depending on the HTTP verb specified)
 */

router.param('flowerID', flowers.flowerByID);
