const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Areas = require('./Areas');

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
  modelName: 'area_surface', 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

Areas.belongsTo(AreaSurfaces, { foreignKey: 'area_surface', as: 'surface' })
AreaSurfaces.hasOne(Areas, { foreignKey: 'area_surface' })

module.exports = AreaSurfaces;