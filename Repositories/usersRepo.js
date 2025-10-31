const mongoose = require('mongoose');

const Users = require("../Modules/usersModule");

const getAllUsers = (filters) => {
    return Users.find(filters)
}
const findUserByName = (name) => {
    return Users.findOne({ full_name: name })
}
const getUserById = (id) => {
    return Users.findById(id);
};
const addUser = (userObj) => {
    const user = new Users(userObj)
    return user.save()

}


module.exports = { getAllUsers, getUserById, addUser, findUserByName }