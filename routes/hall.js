var express = require('express');
const hall_controlers= require('../controllers/hall');
var router = express.Router();

/* GET halls. */
router.get('/', hall_controlers.hall_view_all_Page );

router.get('/detail', hall_controlers.hall_view_one_Page); 

/* GET hall costume page */
router.get('/create', hall_controlers.hall_create_Page);

module.exports = router;