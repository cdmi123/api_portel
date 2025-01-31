var mongoose = require('mongoose');

var apischema = new mongoose.Schema({
    methode:{type:String,require:true},
    name: {type: String, required: true}
})

module.exports = mongoose.model('API',apischema);