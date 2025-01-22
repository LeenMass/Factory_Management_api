const Employees = require("../Modules/employeesModule")

const getAllEmployess = () => {
    return Employees.find()
}
const addEmployee = (employee) => {
    const emp = new Employees(employee)
    return emp.save()
}
const getEmployeeById = (id) => {
    return Employees.findById(id);
};


const updateEmployee = (id, obj) => {
    return Employees.findByIdAndUpdate(id, obj);
};

const deleteEmployee = (id) => {
    return Employees.findByIdAndDelete(id);
};

module.exports = { getAllEmployess, addEmployee, getEmployeeById, updateEmployee, deleteEmployee }