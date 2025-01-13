const mongoose = require('mongoose');
const shiftsSchema = new mongoose.Schema(
    {

        date: Date,
        starting_hour: String,
        ending_hour: String

    },
    { versionKey: false }
);

const Shifts = mongoose.model('Shift', shiftsSchema, 'Shifts');


module.exports = Shifts;
