const mongoose = require('mongoose');
const shiftsSchema = new mongoose.Schema(
    {

        date: String,
        starting_hour: String,
        ending_hour: String,
        employees: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
        }]

    },
    { versionKey: false }
);

const Shifts = mongoose.model('Shift', shiftsSchema, 'Shifts');


module.exports = Shifts;
