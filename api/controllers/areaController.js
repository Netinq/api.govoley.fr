const ErrorMessage = require('../constructors/ErrorMessage');
const SuccessMessage = require('../constructors/SuccessMessage');
const NodeGeocoder = require('node-geocoder');
const Areas = require('../../database/models/Areas');

async function Store(req, res) {

  const options = {
    provider: 'openstreetmap',
  };

  const geocoder = NodeGeocoder(options);
  const json = await geocoder.reverse({lat: req.body.latitude, lon: req.body.longitude})
  const adress = `${json[0].neighbourhood} ${json[0].streetName}, ${json[0].zipcode} ${json[0].city}, ${json[0].country}`

  const area = new Areas({
    area_surface: req.body.area_surface,
    areas_nb: req.body.areas_nb,
    adress: adress,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  })

  area.save().then(() => {
    new SuccessMessage('Area registered').send(res)
  })
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
}