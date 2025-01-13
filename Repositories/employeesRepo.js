const Emplyees = require("../Modules/employeesModule")

const getAllEmployess = () => {
    return Emplyees.find({})
}

module.exports = { getAllEmployess }