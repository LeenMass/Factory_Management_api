const shiftsRepo = require("../Repositories/shiftsRepo")
const getShifts = async (filters) => {
    const shifts = await shiftsRepo.getAllShifts(filters).populate('employees')
        .lean();
    const shiftData = shifts.map((shift) => {
        const employesInshift = shift.employees.map((emp) => { return { id: emp._id, name: emp.first_name + " " + emp.last_name } })
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

module.exports = { getShifts, addShiftToDB, getShift, updateShiftData }