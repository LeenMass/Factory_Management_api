const express = require("express")
const cors = require("cors")
const db = require("./Configs/config")
const employeesController = require("./Controllers/employeesController")
db()
const app = express();
const PORT = 4000
app.use(cors())
app.use("/employees", employeesController)

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`)
})