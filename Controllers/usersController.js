const userServices = require("../Services/userService")

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const filters = req.query
        const result = await userServices.getUsers(filters)
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await userServices.getUser(id)
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.post("/", async (req, res) => {

    const user = req.body;
    const result = await userServices.addNewUser(user)
    res.json(result)
})

module.exports = router