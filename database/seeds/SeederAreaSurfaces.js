const AreaSurfaces = require("../models/AreaSurfaces");

module.exports = Seeder = () => {
  AreaSurfaces.drop().then(() => {
    AreaSurfaces.create({name: 'Beach'})
    AreaSurfaces.create({name: 'Herbe'})
    AreaSurfaces.create({name: 'Beton'})
    AreaSurfaces.create({name: 'Interieur'})
  })
}
