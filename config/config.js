// Define SQL dependencies
const Sequelize = require('sequelize');

require('dotenv').config();


// Connect to server via MYSQL service JawsDB add-on on Heroku 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, 
                  process.env.DB_USER, 
                  process.env.DB_PW, 
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );

module.exports = sequelize;
