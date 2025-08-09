const Users = require("../Repositories/usersRepo")

const getUsers = (filters) => {
    const users = Users.getAllUsers(filters)

    return users
}
const addNewUser = (user) => {
    return Users.addUser(user)
}

const getUser = (id) => {
    return Users.getUserById(id)

}
module.exports = { getUsers, addNewUser, getUser }