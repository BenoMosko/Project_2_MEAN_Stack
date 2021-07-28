const mongoose = require('mongoose');


let TasksSchema = new mongoose.Schema({
    Title : String,
    Completed : Boolean
});

let PostsSchema = new mongoose.Schema({
    Title : String,
    Body : String
});

let UsersSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    City : String,
    Street : String,
    Zipcode : Number,
    Tasks : [TasksSchema],
    Posts : [PostsSchema]
});

module.exports = mongoose.model('Users', UsersSchema, 'Users');