const ErrorMessage = require('../constructors/ErrorMessage');

const Areas = require('../../database/models/Areas');

async function Store(req, res) {

  const adress = 

  const area = new Areas({
    area_surface: req.area_surface,
    areas_nb: req.areas_nb,
    adress: adress,
    latitude: req.latitude,
    longitude: req.longitude,
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