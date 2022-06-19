const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const AreaSurfaces = require('./AreaSurfaces')
const AreaFeatures = require('./AreaFeatures')

class Areas extends Model {}

Areas.init({

  area_uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: require("sequelize").UUIDV4
  },
  area_surface: DataTypes.BIGINT,
  areas_nb: DataTypes.SMALLINT,
  adress: DataTypes.TEXT,
  latitude: DataTypes.DECIMAL(9, 6),
  longitude: DataTypes.DECIMAL(9, 6),
  image_data: DataTypes.BLOB('long')
}, 
{ 
  sequelize: sequelize, 
  modelName: 'area', 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});


module.exports = Areas;