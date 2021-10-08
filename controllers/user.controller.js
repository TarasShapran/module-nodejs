const users = require('../dataBase/helper');

module.exports = {
    getUsers: async (req, res) => {
        res.json(await users.getUsers());
    },

    getUserById: async (req, res) => {
        const {user_id} = req.params;

        const foundUsers = await users.getUsers();

        res.json(foundUsers[user_id - 1]);
    },

    createUser: async (req, res) => {
        const foundUsers = await users.getUsers();

        const user = {...req.body, id: foundUsers.length + 1};
        foundUsers.push(user);

        await users.writeUsers(foundUsers);

        res.json(user);
    },

    deleteUser: async (req, res) => {
        const {user_id} = req.params;

        const foundUsers = await users.getUsers();

        const filteredUsers = foundUsers.filter(value => value.id !== +user_id);

        await users.writeUsers(filteredUsers);

        res.json(filteredUsers);
    }
};
