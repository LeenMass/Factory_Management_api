const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema(
    {

        first_name: String,
        last_name: String,
        start_work_year: Number,
        department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
        shifts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Shift',
            },
        ],
    },
    { versionKey: false }
);

const Employees = mongoose.model('Employee', employeesSchema, 'Employees');


module.exports = Employees;
