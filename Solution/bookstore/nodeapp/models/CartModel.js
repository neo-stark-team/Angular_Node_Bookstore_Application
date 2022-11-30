const { DataTypes } = require("sequelize");
const database = require(".")
const Cart = database.cart;

module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cartModel", {
    cartID: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      }
    
    });
    return Cart;
  };