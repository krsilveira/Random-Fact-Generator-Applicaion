const Sequelize = require('sequelize');
const sequelize = new Sequelize('randomfact', 'crams', 'stinky', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  console.log('Database connection established successfully');
