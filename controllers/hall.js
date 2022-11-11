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


// for a specific Hall.
exports.hall_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await hall.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.hall_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await hall.findById( req.params.id)
 // Do updates of properties
 if(req.body.hall_name)
 toUpdate.hall_name = req.body.hall_name;
 if(req.body.hall_rent) toUpdate.hall_rent = req.body.hall_rent;
 if(req.body.hall_size) toUpdate.hall_size = req.body.hall_size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
   