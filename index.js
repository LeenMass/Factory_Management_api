const express = require("express")
const cors = require("cors")
const db = require("./Configs/config")
const departmentController = require("./Controllers/departmentsController")
const employeesController = require("./Controllers/employeesController")
const shiftsController = require("./Controllers/shiftsController")
db()
const app = express();
const PORT = 4000
app.use(cors())
app.use(express.json())
app.use("/employees", employeesController)
app.use("/departments", departmentController)
app.use("/shifts", shiftsController)



app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`)
})