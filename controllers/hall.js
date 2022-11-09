var hall = require('../models/hall');

// List of all halls
exports.hall_list = async function(req, res) {
    try{
    theHalls = await hall.find();
    res.send(theHalls);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

/*// List of all hall
exports.hall_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall list');
};*/
// for a specific Hall.
exports.hall_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall detail: ' + req.params.id);
};

// Handle Hall create on POST.
exports.hall_create_post = async function(req, res) {
    console.log(req.body)
    let document = new hall();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"hall_name":"phoenix","hall_rent":10000,"hall_size":1000}
    document.hall_name = req.body.hall_name;
    document.hall_rent = req.body.hall_rent;
    document.hall_size = req.body.hall_size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle Hall delete form on DELETE.
exports.hall_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall delete DELETE ' + req.params.id);
};
// Handle Hall update form on PUT.
exports.hall_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.hall_view_all_Page = async function(req, res) {
    try{
    theHalls = await hall.find();
    res.render('hall', { title: 'Hall Search Results', results: theHalls });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   