const sequelize = require("./db");
const { DataTypes } = require("sequelize");

/**
 * This function return my user
 * @typedef Store
 * @property {string} id
 * @property {string} name
 * @property {string} address
 * @property {string} phone
 * @property {string} email
 * @property {string} cnpj
 * @property {string} password
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * This function return my user
 * @typedef StoreDelete
 * @property {string} message
 */

/**
 * This function return my user
 * @typedef StorePost
 * @property {string} name
 * @property {string} address
 * @property {string} phone
 * @property {string} email
 * @property {string} cnpj
 * @property {string} password
 */
const Store = sequelize.define("Store", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Tables created");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = Store;
