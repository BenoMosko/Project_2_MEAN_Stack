const express = require('express');
const UsersBL = require('../Models/UsersBL');
const router = express.Router();

//1.Get All Users
router.route('/').get(function(request, response)
{
    UsersBL.getUsers().then(data =>
    {
        return response.json(data);
    });
});


//2.Get Specific User
router.route('/:id').get(function(request, response)
{
    let id = request.params.id;

    UsersBL.getUser(id).then(data =>
    {
        return response.json(data);
    });
});



//3.Add User
router.route('/').post(function(reqest, response)
{
    let obj = reqest.body;
    console.log(obj);

    UsersBL.addUser(obj).then(data =>
    {
        return response.json(data);
    });
});


//4.Update User
router.route('/:id').put(function(reqest, response)
{
    let obj = reqest.body;
    let id = reqest.params.id;

    UsersBL.updateUser(id, obj).then(data =>
    {
        return response.json(data);
    });
});


//5.Delete User
router.route('/:id').delete(function(reqest, response)
{
    let id = reqest.params.id;

    console.log(id);

    UsersBL.deleteUser(id).then(data =>
    {
        return response.json(data);
    });
});


module.exports = router;