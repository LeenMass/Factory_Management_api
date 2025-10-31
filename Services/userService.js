const Users = require("../Repositories/usersRepo")
const fs = require('fs')
const path = require('path')

const userAction = async (userId) => {
    const user = await Users.getUserById(userId);
    if (!user) throw new Error('User not found');

    let actionsData = { actions: [] };
    const FILE = path.join(__dirname, '../Data/data.json');

    if (fs.existsSync(FILE)) {
        const fileContent = fs.readFileSync(FILE, 'utf-8').trim();
        if (fileContent) {
            try {
                actionsData = JSON.parse(fileContent);
            } catch {
                actionsData = { actions: [] };
            }
        }
    } else {
        fs.writeFileSync(FILE, JSON.stringify({ actions: [] }, null, 2));
    }

    const today = new Date().toLocaleDateString('en-CA');
    let userActionEntry = actionsData.actions.find(
        entry => entry.user_id === userId && entry.date === today
    );

    if (!userActionEntry) {
        userActionEntry = {
            user_id: userId,
            date: today,
            max_actions: user.num_of_action,
            actionsAllowed: 0
        };
        actionsData.actions.push(userActionEntry);
    }

    if (userActionEntry.actionsAllowed >= userActionEntry.max_actions) {
        return {
            remaining: 0,
            message: 'Daily action limit reached. Please try again tomorrow.'
        };
    }

    userActionEntry.actionsAllowed += 1;
    fs.writeFileSync(FILE, JSON.stringify(actionsData, null, 2));

    const remaining = userActionEntry.max_actions - userActionEntry.actionsAllowed;

    return {
        remaining,
        message: `You have ${remaining} actions remaining today.`
    };
};

const getUserByName = (name) => {
    return Users.findUserByName(name)
}
const addNewUser = (user) => {
    return Users.addUser(user)
}
module.exports = { userAction, getUserByName, addNewUser }