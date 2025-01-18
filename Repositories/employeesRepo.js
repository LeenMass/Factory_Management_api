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

// // Update
// const updatePerson = (id, obj) => {
//     return Person.findByIdAndUpdate(id, obj);
// };

// // Delete
// const deletePerson = (id) => {
//     return Person.findByIdAndDelete(id);
// };

module.exports = { getAllEmployess, addEmployee, getEmployeeById }