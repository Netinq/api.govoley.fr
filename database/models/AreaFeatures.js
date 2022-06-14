const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Areas = require('./Areas');

class AreaFeatures extends Model {}

AreaFeatures.init({
  area_uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
  },
  net: DataTypes.BOOLEAN,
  lines: DataTypes.BOOLEAN
}, 
{ 
  sequelize: sequelize, 
  modelName: 'AreaFeatures', 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = AreaFeatures;