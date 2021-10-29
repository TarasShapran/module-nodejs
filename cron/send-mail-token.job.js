const dayJs = require('dayjs');
const utc = require('dayjs/plugin/utc');

const {O_Auth} = require('../dataBase');
const {emailService} = require('../service');
const {emailActionsEnum} = require('../configs');

dayJs.extend(utc);

module.exports = async () => {
    const previousMonth = dayJs.utc()
        .subtract(10, 'day');

    const users = await O_Auth.find({updatedAt: {$lt: previousMonth}});


    users.map(async ({user_id: {email}}) => {
        await emailService.sendMail(email, emailActionsEnum.COME_BACK);
    });

    return console.log('email sent');
};
