const employeesRepo = require("../Repositories/employeesRepo")

const getEmployees = async (filters) => {
    try {
        const employees = await employeesRepo.getAllEmployess(filters)
            .populate('department_id', 'name')
            .populate('shifts', '_id')
            .lean()

        if (employees.length > 0) {

            const employesFinalData = employees?.map(employee => {
                console.log(employee)

                const x = employee?.shifts.map(shift => {
                    return {
                        id: shift._id,
                    }
                })




                return {
                    id: employee._id,
                    department_id: employee.department_id && employee.department_id._id ? employee.department_id._id : "No Department",
                    Full_Name: employee.first_name && employee.last_name ? employee.first_name + " " + employee.last_name : "No employee",
                    Department: employee.department_id && employee.department_id.name ? employee.department_id.name : 'No Department',
                    shifts: x
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

const getEmployee = (id) => {
    return employeesRepo.getEmployeeById(id)

}
const updateEmployeeData = (id, obj) => {
    return employeesRepo.updateEmployee(id, obj)
}
const deleteEmployeeData = (id) => {
    return employeesRepo.deleteEmployee(id)
}
module.exports = { getEmployees, addEmployeeToDB, getEmployee, updateEmployeeData, deleteEmployeeData }