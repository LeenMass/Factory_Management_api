const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./Configs/config");
const PORT = 4000;
const app = express();

const departmentController = require("./Controllers/departmentsController");
const employeesController = require("./Controllers/employeesController");
const shiftsController = require("./Controllers/shiftsController");
const usersController = require("./Controllers/usersController");
const logInController = require("./Controllers/loginController");
const logOutController = require("./Controllers/logout");
const authenticationToken = require("./auth");

db();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

app.use("/login", logInController);
app.use("/employees", authenticationToken, employeesController);
app.use("/departments", authenticationToken, departmentController);
app.use("/shifts", authenticationToken, shiftsController);
app.use("/users", authenticationToken, usersController);

app.use("/logout", logOutController);
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});