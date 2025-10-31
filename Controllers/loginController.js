
const express = require("express")
const router = express.Router()
const axios = require("axios")
const Users = require("../Repositories/usersRepo")
const UsersService = require("../Services/userService")

const jwt = require("jsonwebtoken")
require('dotenv').config();

router.post("/", async (req, res) => {
    const users = await Users.getAllUsers({})
    const { username, email } = req.body;
    console.log(req.body)
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    const findUserInUsersApi = data.find(u => u.username === username && u.email === email);

    if (!findUserInUsersApi) {
        res.status(401).json(`user not found in users api`)
    }

    const findUserInDB = users.find(e => e.full_name === findUserInUsersApi.name)
    if (!findUserInDB) {
        const user = {
            full_name: findUserInUsersApi?.name, num_of_action: Math.floor(Math.random() * (15 - 3 + 1)) + 3
        }
        await UsersService.addNewUser(user)
    }
    const findUserByNameInDB = await UsersService.getUserByName(findUserInUsersApi.name)

    const token = jwt.sign({ id: findUserByNameInDB?._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        maxAge: 604800000
    });

    res.json({ message: "Login successful", full_name: findUserInUsersApi.name });



})



module.exports = router