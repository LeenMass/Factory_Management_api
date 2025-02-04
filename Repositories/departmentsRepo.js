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
const updateDepartment = (id, obj) => {
    return Departments.findByIdAndUpdate(id, obj);
};
const deleteDepartment = (id) => {
    return Departments.findByIdAndDelete(id);
};
module.exports = { getAllDepartments, addDepartment, getDepartmentById, updateDepartment, deleteDepartment }