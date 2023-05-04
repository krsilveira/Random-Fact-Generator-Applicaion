const Sequelize = require('sequelize');

const sequelize = new Sequelize('randomfact', 'crams', 'stinky', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.sync()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;

