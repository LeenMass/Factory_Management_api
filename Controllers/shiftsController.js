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
router.post("/addingEmployeesToShift", async (req, res) => {
    const data = req.body;
    console.log(data)
    const result = await shiftService.addEmployeesToshift(data)
    res.json(result)
})
router.post("/employeesShift", async (req, res) => {
    const employeesShifts = req.body;
    console.log(employeesShifts)
    try {
        if (!Array.isArray(employeesShifts) || employeesShifts.length === 0) {
            return res.status(400).json({ error: "employees Sgifts is required and must be an array" });
        }
        const result = await shiftService.removeEmployeeFromShift(employeesShifts);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }

});



module.exports = router