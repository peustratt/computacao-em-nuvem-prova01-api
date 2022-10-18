const { Sequelize } = require("sequelize");
require('dotenv').config()
// const sequelize = new Sequelize("fqa7o4b6iu677nb6", "xuo0f2hpvndexhv2", "dxuitpp4njqkwqjr", {
//     host: 'migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     dialect: "mysql",
//     port: 3306,
// });
// ---------------------------------------------------------------------------------', process.env.JAWSDB_URL)
// const sequelize = new Sequelize('mysql://xuo0f2hpvndexhv2:dxuitpp4njqkwqjr@migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/fqa7o4b6iu677nb6')
const sequelize = new Sequelize(process.env.JAWSDB_URL)

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;
