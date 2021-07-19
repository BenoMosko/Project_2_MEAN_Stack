const UsersModel = require('../Models/UsersModel');

//Get All Users
const getUsers = () =>
{
    return new Promise((resolve, reject) =>
    {
        UsersModel.find({}, function(error, data)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve(data);
            }
        });
    });
}


//Get Specific User
const getUser = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        UsersModel.findById(id, function(error, data)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve(data);
            }
        });
    });
}


//Add Users
const addUsers = (obj) =>
{
    return new Promise((resolve, reject) =>
    {
        let users = new UsersModel({
            Name : obj.Name,
            Email : obj.Email,
            City : obj.City,
            Street : obj.Street,
            Tasks : obj.Tasks,
            Posts : obj.Posts
        });

        users.save(function(error)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve("Created")
            }
        });
    });
}


//Update Users
const updateUsers = (id, obj) =>
{
    return new Promise((resolve, reject) =>
    {
        UsersModel.findByIdAndUpdate(id, {
            Name : obj.Name,
            Email : obj.Email,
            City : obj.City,
            Street : obj.Street,
            Tasks : obj.Tasks,
            Posts : obj.Posts
        }, function(error)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve("Updated");
            }
        });
    });
}


//Delete Users
const deleteUsers = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        UsersModel.findByIdAndDelete(id, function(error)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve("Deleted")
            }
        });
    });
}


module.exports = {getUsers, getUsers, addUsers, updateUsers, deleteUsers};