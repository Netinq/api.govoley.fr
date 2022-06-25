const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const sequelize = require('./database/connection');
var bodyParser = require('body-parser')

const Seeders = require('./database/seeds/Seeders');
const AreaSurfaces = require('./database/models/AreaSurfaces');
const Areas = require('./database/models/Areas');
const AreaFeatures = require('./database/models/AreaFeatures');

const app = express();

sequelize.sync();
AreaSurfaces.sync()
Areas.sync()
AreaFeatures.sync()
dotenv.config();

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({limit: '100mb'}));
app.use('/auth', require('./routes/auth'));
app.use('/area', require('./routes/area'));

Seeders()

module.exports = app;