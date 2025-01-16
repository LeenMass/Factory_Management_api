const Departments = require("../Repositories/departmentsRepo")

const getDepartments = () => {
    return Departments.getAllDepartments()
}
const addNewDepartment = (department) => {
    return Departments.addDepartment(department)
}
const getDepartment = (id) => {
    return Departments.getDepartmentById(id)

}
module.exports = { getDepartments, addNewDepartment, getDepartment }