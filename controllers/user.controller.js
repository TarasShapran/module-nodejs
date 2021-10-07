const users = require('../dataBase/users')

module.exports={
    getUsers:(req,res)=>{
        console.log(req);
        res.json(users);
        },
    createUser:(req,res)=>{
        res.json('post method');
    },
    deleteUser:(req,res)=>{
        res.json('delete method');
    }

}