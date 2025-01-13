const employeesRepo = require("../Repositories/employeesRepo")

const getEmployees = () => {
    return employeesRepo.getAllEmployess()
}

module.exports = { getEmployees }