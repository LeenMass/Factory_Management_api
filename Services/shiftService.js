const shiftsRepo = require("../Repositories/shiftsRepo")
const Employees = require("../Modules/employeesModule")
const shiftsModule = require("../Modules/shiftsModule")

const getShifts = async (filters) => {
    const shiftsQuery = shiftsRepo.getAllShifts(filters);

    const shifts = await shiftsQuery.populate('employees')
        .lean();
    const shiftData = shifts.map((shift) => {
        const employesInshift = shift.employees.map((emp) => {
            return {
                id: emp._id, name: `${emp.first_name} ${emp.last_name}`
            }
        })
        return {
            id: shift._id, date: shift.date, starting_hour: shift.starting_hour, ending_hour: shift.ending_hour, employees: employesInshift

        }
    })
    return shiftData
}


const addShiftToDB = (shift) => {
    return shiftsRepo.addShift(shift)

}

const getShift = (id) => {
    return shiftsRepo.getShiftById(id)

}
const updateShiftData = (id, obj) => {
    return shiftsRepo.updateShift(id, obj)
}

const addEmployeesToshift = async (data) => {
    try {
        if (!Array.isArray(data.employees) || data.employees.length === 0) {
            throw new Error("employees must be a non empty array");
        }

        const result = await shiftsModule.updateOne(
            { _id: data.shift_id },
            { $addToSet: { employees: { $each: data.employees } } }
        );
        return result;
    } catch (error) {
        console.error("Error adding employees to shift:", error);
        throw error;
    }
}
const asignEmployeeToshift = async (data) => {
    try {

        const result = await shiftsModule.updateOne(
            { _id: data.shiftId },
            { $addToSet: { employees: data.empId } }
        );
        return result;
    } catch (error) {
        console.error("Error adding employees to shift:", error);
        throw error;
    }
}
const removeEmployeeFromShift = async (employeesShifts) => {
    const shiftsDecuments = employeesShifts.map(({ shift_id, employees }) =>
        shiftsModule.updateOne(
            { _id: shift_id },
            { $pull: { employees: { $in: employees } } }
        )
    );
    const results = await Promise.all(shiftsDecuments);
    return results;
}


module.exports = { getShifts, addShiftToDB, getShift, updateShiftData, removeEmployeeFromShift, addEmployeesToshift, asignEmployeeToshift }