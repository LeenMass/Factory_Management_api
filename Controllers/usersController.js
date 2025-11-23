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
router.post("/actions", async (req, res) => {
    try {
        const result = await userServices.userAction(req.user.id);
        if (result.remaining == 0) {
            res.clearCookie('token', {
                httpOnly: true,
                sameSite: 'lax',
                secure: false
            });
            return res.status(403).json({ message: result.message });

        } res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router