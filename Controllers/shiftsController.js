const shiftService = require("../Services/shiftService")

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const filters = req.query
        const result = await shiftService.getShifts(filters)
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await shiftService.getShift(id)
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.post("/", async (req, res) => {

    const shift = req.body;
    console.log(req.body)
    const result = await shiftService.addShiftToDB(shift)
    res.json(result)
})
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const shift = req.body;
    console.log(req.body)
    const result = await shiftService.updateShiftData(id, shift)
    res.json(result)
})



module.exports = router