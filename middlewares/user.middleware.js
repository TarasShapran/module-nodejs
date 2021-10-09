const User = require('../dataBase/User');

module.exports = {
    createUserMiddleware: async (req, res, next) => {
        try {
            const userByEmail = await User.findOne({email: req.body.email});

            if (userByEmail) {
                throw new Error('Email already exist');
            }
            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    checkUserIdMiddleware: async (req, res, next)=>{
        try {
            const userId= await User.findOne({_id: req.params.user_id});

            if (!userId){
                throw new Error('user_id does not exist');
            }
            next();
        }catch (err) {
            res.json(err.message);
        }
    }
};
