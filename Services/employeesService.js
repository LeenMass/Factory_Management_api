const employeesRepo = require("../Repositories/employeesRepo")

const getEmployees = async () => {
    try {
        const employees = await employeesRepo.getAllEmployess()
            .populate('department_id', 'name')
            .lean();
        console.log(employees)
        const employesFinalData = employees.map(employee => ({
            id: employee._id,
            Full_Name: employee.first_name + " " + employee.last_name,
            Department: employee.department_id ? employee.department_id.name : 'No Department'
        }));
        return employesFinalData;
    } catch (err) {
        return err;
    }
}
const addEmployeeToDB = (employee) => {
    return employeesRepo.addEmployee(employee)
}

const getEmployee = (id) => {
    return employeesRepo.getEmployeeById(id)

}
module.exports = { getEmployees, addEmployeeToDB, getEmployee }