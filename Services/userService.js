const Users = require("../Repositories/usersRepo")
const fs = require('fs')
const path = require('path')
const FILE = path.join(__dirname, "../Data/data.json");

const readFile = () => {

    if (fs.existsSync(FILE)) {
        let dataFile = fs.readFileSync(FILE, "utf8").trim()
        try {
            return dataFile ? JSON.parse(dataFile) : { actions: [] }
        } catch (err) {
            return { actions: [] };
        }
    }
    return { actions: [] }

}
const getUsers = async () => {
    const users = await Users.getAllUsers({})
    const dataFile = readFile();
    const usersFinalData = users.map(user => {
        const entry = dataFile.actions.find(
            e => e.user_id.toString() === user._id.toString() && e.date === new Date().toLocaleDateString("en-CA")
        );
        return { ...user._doc, actionAllowed: entry.actionsAllowed }
    })
    return usersFinalData

}


const userAction = async (userId) => {
    const user = await Users.getUserById(userId);
    if (!user) throw new Error("User not found");

    let actionsData = readFile();
    if (!actionsData) actionsData = { actions: [] };

    const today = new Date().toLocaleDateString("en-CA");
    let userEntry = actionsData.actions.find(
        (e) => e.user_id === userId && e.date === today
    );

    if (!userEntry) {
        userEntry = {
            user_id: userId,
            date: today,
            max_actions: user.num_of_action,
            actionsAllowed: 0,
        };
        actionsData.actions.push(userEntry);
    }

    if (userEntry.actionsAllowed >= userEntry.max_actions) {
        return {
            remaining: 0,
            message: "Daily action limit reached. Please try again tomorrow.",
        };
    }

    userEntry.actionsAllowed += 1;

    fs.writeFileSync(FILE, JSON.stringify(actionsData, null, 2));

    const remaining = userEntry.max_actions - userEntry.actionsAllowed;

    return {
        remaining,
        message: `You have ${remaining} actions remaining today.`,
    };
};


const getUserByName = (name) => {
    return Users.findUserByName(name)
}
const addNewUser = (user) => {
    return Users.addUser(user)
}
module.exports = { userAction, getUserByName, addNewUser, getUsers, readFile }