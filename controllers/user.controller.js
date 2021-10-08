const User = require('../dataBase/User');

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
            const newUser = await User.create(req.body);

            res.json(newUser);
        } catch (err) {
            res.json(err);
        }

    },

    deleteUser: (req, res) => {
        res.json('delete');
    },

    loginUser: (req, res) => {
        res.json("userAuth");
    }
};
