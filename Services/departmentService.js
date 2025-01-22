const Departments = require("../Repositories/departmentsRepo")

const getDepartments = async () => {
    const departments = await Departments.getAllDepartments()
        .populate("manager", "first_name last_name").lean()
    const depatmentsData = departments.map(dep => ({
        id: dep._id,
        Department: dep.name,
        Full_Name: dep.manager ? dep.manager.first_name + " " + dep.manager.last_name : "No Manager",
        Manager: dep.manager ? dep.manager._id : "No Manager"

    }))
    return depatmentsData
}
const addNewDepartment = (department) => {
    return Departments.addDepartment(department)
}
const getDepartment = (id) => {
    return Departments.getDepartmentById(id)

}
module.exports = { getDepartments, addNewDepartment, getDepartment }