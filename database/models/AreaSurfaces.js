const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class AreaSurfaces extends Model {}

AreaSurfaces.init({
  surface_id: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    autoIncrement: true
  },
  name: DataTypes.STRING,
}, 
{ 
  sequelize: sequelize, 
  modelName: 'AreaSurfaces', 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

module.exports = AreaSurfaces;