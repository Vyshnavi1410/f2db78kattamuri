var express = require('express');
const hall_controlers= require('../controllers/hall');
var router = express.Router();

/* GET halls. */
router.get('/', hall_controlers.hall_view_all_Page );

router.get('/detail', hall_controlers.hall_view_one_Page); 

/* GET hall hall page */
router.get('/create', hall_controlers.hall_create_Page);

/* GET create update page */
router.get('/update', hall_controlers.hall_update_Page);

/* GET delete hall page */
router.get('/delete', hall_controlers.hall_delete_Page);

module.exports = router;