var express = require('express');
const hall_controlers= require('../controllers/hall');
var router = express.Router();

/* GET halls. */
router.get('/', hall_controlers.hall_view_all_Page );
module.exports = router;
