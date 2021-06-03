const { User } = require('../models');

const userData = [{
    username: 'John',
    password: 'admin1234'

},
{
    username: 'Peter',
    password: 'admin1234'
},
{
    username: 'Paul',
    password: 'admin1234'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;