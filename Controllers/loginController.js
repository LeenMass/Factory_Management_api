
const express = require("express")
const router = express.Router()
const axios = require("axios")
const Users = require("../Services/userService")
const jwt = require("jsonwebtoken")
require('dotenv').config();


router.post("/", async (req, res) => {
    const users = await Users.getUsers(req.query)
    const { username, email } = req.body;
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    const findUser = data.find(u => u.username === username && u.email === email);
    if (!findUser) {
        res.status(401).json(`user not found`)
    }
    const result = users.find(e => e.full_name === findUser.name)
    if (!result) {
        const user = {
            full_name: findUser?.name, num_of_action: Math.floor(Math.random() * (15 - 3 + 1)) + 3
        }
        await Users.addNewUser(user)
    }
    const token = jwt.sign({ id: findUser.id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'Lax',
        maxAge: 3600000
    });

    res.json({ message: "Login successful", full_name: findUser.name });



})



module.exports = router