const Departments = require("../Repositories/departmentsRepo")
const Employees = require("../Repositories/employeesRepo")

const getDepartments = async () => {
    const departments = await Departments.getAllDepartments()
        .populate("manager", "first_name last_name")
    const employees = await Employees.getAllEmployess()

    if (departments.length > 0) {
        const depatmentsData = departments.map(dep => {

            const employeesDep = employees.filter(emp => emp.department_id == (dep.id)).map((emp) => {
                return {
                    id: emp._id,
                    name: `${emp.first_name} ${emp.last_name}`

                }
            })
            return {
                id: dep._id,
                department: dep.name ? dep.name : "No Department",
                managerId: dep.manager ? dep.manager._id : "No Manager",
                managerName: dep.manager ? `${dep.manager.first_name} ${dep.manager.last_name}` : "No Manager",
                employees: employeesDep.length > 0 ? employeesDep : "No employees"

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