var express = require('express');
const hall_controlers = require('../controllers/hall');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET halls. */
router.get('/',hall_controlers.hall_view_all_Page);

router.get('/detail',hall_controlers.hall_view_one_Page);

/* GET hall create page */
router.get('/create',secured, hall_controlers.hall_create_Page);

/* GET hall update page */
router.get('/update', secured,hall_controlers.hall_update_Page);

/* GET delete hall page */
router.get('/delete', secured, hall_controlers.hall_delete_Page);

module.exports = router;