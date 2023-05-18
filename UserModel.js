const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: String,
    
}, {
    timestamps: true
})
 
module.exports = mongoose.model('User', User)