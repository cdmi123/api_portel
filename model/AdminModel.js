var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status:{type:Number,require:true,default:0}
})

module.exports = mongoose.model('admin',userschema);