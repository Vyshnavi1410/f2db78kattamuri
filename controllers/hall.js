var hall = require('../models/hall');
// List of all hall
exports.hall_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall list');
};
// for a specific Hall.
exports.hall_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall detail: ' + req.params.id);
};
// Handle Hall create on POST.
exports.hall_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall create POST');
};
// Handle Hall delete form on DELETE.
exports.hall_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall delete DELETE ' + req.params.id);
};
// Handle Hall update form on PUT.
exports.hall_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Hall update PUT' + req.params.id);
};