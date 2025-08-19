

const express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: 'Lax',
    });
    res.status(200).json({ message: "Logged out" });
});
module.exports = router