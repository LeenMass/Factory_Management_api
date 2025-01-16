const employeesRepo = require("../Repositories/employeesRepo")

const getEmployees = () => {
    return employeesRepo.getAllEmployess()
}
const addEmployeeToDB = (employee) => {
    return employeesRepo.addEmployee(employee)
}

const getEmployee = (id) => {
    return employeesRepo.getEmployeeById(id)

}
module.exports = { getEmployees, addEmployeeToDB, getEmployee }