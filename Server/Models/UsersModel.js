const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    City : String,
    Street : String,
    Zipcode : Number,
    Tasks : [],
    Posts : [String]
});

module.exports = mongoose.model('Users', UsersSchema, 'Users');