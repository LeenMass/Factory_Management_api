const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema(
    {

        full_name: String,
        num_of_action: Number,


    },
    { versionKey: false }
);

const Users = mongoose.model('User', usersSchema, 'Users');


module.exports = Users;
