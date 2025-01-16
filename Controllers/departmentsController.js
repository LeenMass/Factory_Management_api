const departmentService = require("../Services/departmentService")

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const result = await departmentService.getDepartments()
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await departmentService.getDepartment(id)
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.post("/", async (req, res) => {
    const department = req.body;
    const result = await departmentService.addNewDepartment(department)
    res.json(result)
})

module.exports = router