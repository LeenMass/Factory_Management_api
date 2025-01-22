const employeesService = require("../Services/employeesService")

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const result = await employeesService.getEmployees()
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }

})
router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const employee = req.body;
        console.log(employee)
        const result = await employeesService.addEmployeeToDB(employee)
        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await employeesService.getEmployee(id)

        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        console.log(obj)
        const result = await employeesService.updateEmployeeData(id, obj)

        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await employeesService.deleteEmployeeData(id)

        res.json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router