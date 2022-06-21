const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const sequelize = require('./database/connection');

const Seeders = require('./database/seeds/Seeders')

const app = express();

sequelize.sync();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/auth', require('./routes/auth'));
app.use('/area', require('./routes/area'));

Seeders()

module.exports = app;