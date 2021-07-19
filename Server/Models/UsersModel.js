const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    City : String,
    Street : String,
    Zipcode : Number,
    Tasks : [{_id : Number, Title : String, Completed : Boolean}],
    Posts : [{_id : Number, Title : String, Body : String}]
});

module.exports = mongoose.model('Users', UsersSchema, 'Users');