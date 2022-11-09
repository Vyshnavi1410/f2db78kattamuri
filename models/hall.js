const mongoose = require("mongoose")
const hallSchema = mongoose.Schema({
hall_name: String,
hall_rent: Number,
hall_size: Number
})
module.exports = mongoose.model("hall",hallSchema)