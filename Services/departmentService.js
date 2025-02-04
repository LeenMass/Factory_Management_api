const Departments = require("../Repositories/departmentsRepo")
const Employees = require("../Repositories/employeesRepo")
const getDepartments = async () => {
    const departments = await Departments.getAllDepartments()
        .populate("manager", "first_name last_name").lean()
    const employees = await Employees.getAllEmployess()

    if (departments.length > 0) {
        const depatmentsData = departments.map(dep => {

            const employeesDep = employees.filter(emp => emp.department_id.equals(dep._id)).map((emp) => {
                return {
                    id: emp._id,
                    Full_Name: emp.first_name && emp.last_name ? emp.first_name + " " + emp.last_name : "No employee",
                    department_id: emp.department_id

                }
            })
            return {
                id: dep._id,
                Department: dep.name ? dep.name : "No Department",
                Full_Name: dep.manager && dep.manager.first_name && dep.manager.last_name ? dep.manager.first_name + " " + dep.manager.last_name : "No Manager",
                Manager: dep.manager && dep.manager._id ? dep.manager._id : "No Manager",
                Employees: employeesDep.length > 0 ? employeesDep : "No employees"

            }


        })
        return depatmentsData

    }
    else {
        return "no employess"
    }

}
const addNewDepartment = (department) => {
    return Departments.addDepartment(department)
}
const addEmployeeToDepartment = () => {

}
const getDepartment = (id) => {
    return Departments.getDepartmentById(id)

}
const updateDepartmentData = (id, obj) => {
    return Departments.updateDepartment(id, obj)
}
const deleteDeapartmentData = (id) => {
    return Departments.deleteDepartment(id)
}
module.exports = { getDepartments, addNewDepartment, getDepartment, updateDepartmentData, deleteDeapartmentData }