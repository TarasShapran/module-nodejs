const User = require('../dataBase/User');
const passwordService = require('../service/password.service');


module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();

            res.json(users);
        } catch (err) {
            res.json(err);
        }
    },

    getUserById: async (req, res) => {
        try {
            const {user_id} = req.params;

            const user = await User.findById(user_id);

            res.json(user);
        } catch (err) {
            res.json(err);
        }
    },

    createUser: async (req, res) => {
        try {
            const {password} = req.body;

            const hashedPassword = await passwordService.hash(password);

            const newUser = await User.create({...req.body,password:hashedPassword});

            res.json(newUser);
        } catch (err) {
            res.json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {user_id} = req.params;

            await User.findByIdAndDelete(user_id);

            res.json(`User with id: ${user_id} deleted`);
        } catch (err) {
            res.json(err);
        }
    },

    loginUser: (req, res) => {
        res.json('userAuth');
    }
};
