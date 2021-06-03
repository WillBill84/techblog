
const sequelize = require('../config/connection');
const { User } = require('../models');

const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const userData = require('./userData.json');



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};


seedDatabase();