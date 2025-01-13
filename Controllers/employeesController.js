const employeesService = require("../Services/employeesService")

const express = require("express")
const root = express.Router()

root.get("/", async (req, res) => {
    const result = await employeesService.getEmployees()
    res.json(result)
})

module.exports = root