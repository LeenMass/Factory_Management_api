const Departments = require("../Modules/departmentModule")

const getAllDepartments = () => {
    return Departments.find({})
}
const getDepartmentById = (id) => {
    return Departments.findById(id);
};
const addDepartment = (department) => {
    const dep = new Departments(department)
    return dep.save()
}
module.exports = { getAllDepartments, addDepartment, getDepartmentById }