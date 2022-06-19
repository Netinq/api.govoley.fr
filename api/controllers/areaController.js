const ErrorMessage = require('../constructors/errorMessage');
const SuccessMessage = require('../constructors/successMessage');
const NodeGeocoder = require('node-geocoder');
const Areas = require('../../database/models/Areas');
const sequelize = require('../../database/connection');
const { QueryTypes } = require('sequelize');

async function Store(req, res) {

  const options = {
    provider: 'openstreetmap',
  };

  const geocoder = NodeGeocoder(options);
  const json = await geocoder.reverse({lat: req.body.latitude, lon: req.body.longitude})
  const adress = `${json[0].neighbourhood} ${json[0].streetName}, ${json[0].zipcode} ${json[0].city}, ${json[0].country}`
  const data = Buffer.from(req.body.image_data, "base64");
  
  const area = new Areas({
    area_surface: req.body.area_surface,
    areas_nb: req.body.areas_nb,
    adress: adress,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    image_data: data
  })

  area.save().then(() => {
    new SuccessMessage('Area registered').send(res)
  })
}

async function Near(req, res) {

  const areas = await sequelize.query(`SELECT ROUND(6371 * acos (cos ( radians(${req.body.latitude}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${req.body.longitude}) ) + sin ( radians(${req.body.latitude}) ) * sin( radians( latitude ) ))) AS distance,areas.* FROM areas HAVING distance <=${req.body.distance}`, { type: QueryTypes.SELECT })
  
  res.json(areas)
}

async function update(req, res) {
  
}

async function show(req, res) {
  
}

async function getByPosition(req, res) {
  
}

async function destroy(req, res) {
  
}

module.exports = {
  Store,
  Near
}