const fs = require('fs');
const path = require('path');
const dirPath =  path.join(__dirname,'data.txt');
const getUsers = () => {
    fs.readFile(dirPath, (e, data) => {
        const user = JSON.parse(data.toString());
        console.log(user)
        return user;
    });
}
module.exports = getUsers;