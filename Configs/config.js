const mongoose = require("mongoose")
require('dotenv').config();

const connectToDB = () => {
    mongoose
        .connect(process.env.db_url)
        .then(() => console.log("connect to Factory DB"))
        .catch(err => console.log(err))
}
module.exports = connectToDB
