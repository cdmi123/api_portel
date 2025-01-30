var mongoose = require('mongoose');

var categoryschema = new mongoose.Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model('category',categoryschema);