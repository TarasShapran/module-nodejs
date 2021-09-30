const fsPr = require('fs/promises');

const write = async (fileDirection, data) => {
    await fsPr.writeFile(fileDirection, JSON.stringify(data));
};

module.exports = { write };