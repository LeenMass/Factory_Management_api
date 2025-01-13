const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema(
    {

        name: String,
        manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }

    },
    { versionKey: false }
);

const Department = mongoose.model('Department', departmentSchema, 'Department');


module.exports = Department;
