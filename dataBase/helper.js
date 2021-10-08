const path = require('path');
const fsPr = require('fs/promises');

const dataPath = path.join(__dirname, 'data.json');

const getUsers = async () => {
    const data = await fsPr.readFile(dataPath);
    return JSON.parse(data);
};

const writeUsers = async (users) => {
    await fsPr.writeFile(dataPath, JSON.stringify(users));
};

module.exports = { getUsers, writeUsers };
