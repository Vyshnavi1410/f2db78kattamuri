const mongoose = require("mongoose")
const hallSchema = mongoose.Schema({
hall_name: { type:String,required:true},
hall_rent: { type:Number,required:true, min:10,max:15000},
hall_size: { type:Number,required:true,min:10,max:10000}
})
module.exports = mongoose.model("hall",hallSchema)