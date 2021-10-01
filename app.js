const writer = require('./writer/writer')
const sort = require('./sort/sort')
const path = require('path');

const boys = path.join(__dirname, 'files', 'boys');
const girls = path.join(__dirname, 'files', 'girls');

const user1 = {name: 'taras', gender: 'male', age: 20};
const user2 = {name: 'andriy', gender: 'male', age: 20};
const user3 = {name: 'ira', gender: 'female', age: 20};
const user4 = {name: 'olena', gender: 'female', age: 20};
const user5 = {name: 'svitlana', gender: 'female', age: 20};
const user6 = {name: 'olesya', gender: 'female', age: 20};
const user7 = {name: 'oksana', gender: 'female', age: 20};
const user8 = {name: 'diana', gender: 'female', age: 20};
const user9 = {name: 'roma', gender: 'male', age: 20};

writer.write(path.join(girls,'user1.txt'),user1);
writer.write(path.join(girls,'user2.txt'),user2);
writer.write(path.join(girls,'user3.txt'),user3);
writer.write(path.join(boys,'user4.txt'),user4);
writer.write(path.join(boys,'user5.txt'),user5);
writer.write(path.join(boys,'user6.txt'),user6);
writer.write(path.join(boys,'user7.txt'),user7);
writer.write(path.join(girls,'user8.txt'),user8);
writer.write(path.join(boys,'user9.txt'),user9);

sort(boys, girls, 'female');
sort(girls, boys, 'male');