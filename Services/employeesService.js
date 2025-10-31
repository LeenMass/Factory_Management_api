const employeesRepo = require("../Repositories/employeesRepo")
const shiftsRepo = require("../Repositories/shiftsRepo")

const getEmployees = async (filters) => {
    try {
        const employeesData = employeesRepo.getAllEmployess(filters)
        const employees = await employeesData
            .populate('department_id', 'name');

        if (employees.length > 0) {

            const employeesFinalData = await Promise.all(
                employees.map(async (employee) => {
                    const shifts = await shiftsRepo.getAllShifts({ employees: employee._id })
                        .select('date starting_hour ending_hour');
                    return {
                        id: employee._id,
                        department_id: employee.department_id?._id || "No Department",
                        first_name: employee.first_name ? employee.first_name : "",
                        last_name: employee.last_name ? employee.last_name : "",
                        Department: employee.department_id?.name || 'No Department',
                        shifts: shifts || []
                    };
                })
            );
            return employeesFinalData;

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
        const employee = await getEmployees({ _id: id })
        return employee[0]
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