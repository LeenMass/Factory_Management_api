const express = require("express")
const cors = require("cors")
const db = require("./Configs/config")
const departmentController = require("./Controllers/departmentsController")
const employeesController = require("./Controllers/employeesController")
const shiftsController = require("./Controllers/shiftsController")
const usersController = require("./Controllers/usersController")
db()
const app = express();
const PORT = 4000
app.use(cors())
app.use(express.json())
app.use("/employees", employeesController)
app.use("/departments", departmentController)
app.use("/shifts", shiftsController)
app.use("/users", usersController)


app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`)
})