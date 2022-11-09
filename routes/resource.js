var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var hall_controller = require('../controllers/hall');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Hall ROUTES ///
// POST request for creating a Hall.
router.post('/halls', hall_controller.hall_create_post);
// DELETE request to delete Hall.
router.delete('/halls/:id', hall_controller.hall_delete);
// PUT request to update Hall.
router.put('/halls/:id', hall_controller.hall_update_put);
// GET request for one Hall.
router.get('/halls/:id', hall_controller.hall_detail);
// GET request for list of all Hall items.
router.get('/halls', hall_controller.hall_list);
module.exports = router;