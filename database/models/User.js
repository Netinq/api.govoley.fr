const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class User extends Model {}

User.init({

  uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: require("sequelize").UUIDV4
  },
  email: DataTypes.STRING,
  password: DataTypes.TEXT,
  nickname: DataTypes.STRING,
  age: DataTypes.INTEGER,
  level: DataTypes.INTEGER
}, 
{ 
  sequelize: sequelize, 
  modelName: 'User', 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  defaultScope: {
    attributes: { exclude: ['password'] }
  } 
});

module.exports = User;