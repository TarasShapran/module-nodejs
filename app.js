let User = require('./user/User');
let writer = require('./writer/writer')
let sortBoys = require('./reader/reader')

const path = require("path");

const boys = path.join(__dirname, 'files', 'boys');
const girls = path.join(__dirname, 'files', 'girls');

const user1 = new User("taras", 'male', 20);
const user2 = new User("andriy", 'male', 20);
const user3 = new User("ira", 'female', 20);
const user5 = new User("olena", 'female', 20);
const user6 = new User("svitlana", 'female', 20);
const user7 = new User("oksana", 'female', 20);
const user8 = new User("diana", 'female', 20);

// writer.write(boys+'/'+'user2.txt',user2)
// writer.write(boys+'/'+'user3.txt',user3)
// writer.write(boys+'/'+'user5.txt',user5)
// writer.write(boys+'/'+'user6.txt',user6)
// writer.write(boys+'/'+'user7.txt',user7)
// writer.write(boys+'/'+'user8.txt',user8)
 sortBoys(girls, boys,'male');

