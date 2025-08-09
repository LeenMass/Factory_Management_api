const employeesRepo = require("../Repositories/employeesRepo")

const getEmployees = async (filters) => {
    try {
        const employeesData = employeesRepo.getAllEmployess(filters)
        const employees = await employeesData.populate('shifts', 'date starting_hour ending_hour')
            .populate('department_id', 'name');


        if (employees.length > 0) {

            const employesFinalData = employees.map(employee => {
                return {
                    id: employee._id,
                    department_id: employee.department_id && employee.department_id._id ? employee.department_id._id : "No Department",
                    name: employee.first_name && employee.last_name ? employee.first_name + " " + employee.last_name : "No employee",
                    Department: employee.department_id && employee.department_id.name ? employee.department_id.name : 'No Department',
                    shifts: employee.shifts ? employee.shifts : []

                }
            })
            return employesFinalData;

        }
        else {
            return "no data found"

        }
    }



    catch (err) {
        return err;
    }

}


const addEmployeeToDB = (employee) => {
    return employeesRepo.addEmployee(employee)
}

const getEmployee = async (id) => {
    try {
        const res = await employeesRepo.getEmployeeById(id).populate('shifts', 'date starting_hour ending_hour')
            .populate('department_id', 'name');
        console.log(res)
        const finalEmployeeData = { id: res.id, first_name: res.first_name, last_name: res.last_name, start_work_year: res.start_work_year, department_id: res.department_id._id, departmentName: res.department_id.name, shifts: res.shifts }
        return finalEmployeeData
    }
    catch (err) {
        console.log(err)
    }
}
const updateEmployeeData = (id, obj) => {
    return employeesRepo.updateEmployee(id, obj)
}
const deleteEmployeeData = (id) => {
    return employeesRepo.deleteEmployee(id)
}
module.exports = { getEmployees, addEmployeeToDB, getEmployee, updateEmployeeData, deleteEmployeeData }