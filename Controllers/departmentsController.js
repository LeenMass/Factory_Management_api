const departmentService = require("../Services/departmentService")

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const result = await departmentService.getDepartments()
        res.json(result)
    }
    catch (err) {
        res.status(500).json({ error: err.message || err });
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
    try {
        const department = req.body;
        console.log(req.body)
        const result = await departmentService.addNewDepartment(department)
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const department = req.body;
        console.log(req.body)
        const result = await departmentService.updateDepartmentData(id, department)
        res.json(result)
    }

    catch (err) {
        res.status(500).json(err)
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await departmentService.deleteDeapartmentData(id)
        res.json(result)
    }

    catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router