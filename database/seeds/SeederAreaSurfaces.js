const AreaSurfaces = require("../models/AreaSurfaces");

module.exports = Seeder = () => {
  AreaSurfaces.truncate().then(() => {
    AreaSurfaces.create({name: 'Beach'})
    AreaSurfaces.create({name: 'Herbe'})
    AreaSurfaces.create({name: 'Beton'})
    AreaSurfaces.create({name: 'Interieur'})
  })
}
