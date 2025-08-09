const mongoose = require('mongoose');

const Shifts = require("../Modules/shiftsModule");

const getAllShifts = (filters) => {
    return Shifts.find(filters)
}
const getShiftById = (id) => {
    return Shifts.findById(id);
};
const addShift = (shiftObj) => {
    shiftObj.employees = shiftObj.employees.map(id => String(id));
    const shift = new Shifts(shiftObj);
    return shift.save();

}
const updateShift = (id, obj) => {
    return Shifts.findByIdAndUpdate(id, obj);
};

module.exports = { getAllShifts, getShiftById, addShift, updateShift }