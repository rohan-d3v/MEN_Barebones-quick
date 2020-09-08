const express = require('express');
const mongoose = require('mongoose');
const monk = require('monk');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 9050;
var configDB = require('./db.js');

var db = monk(configDB.configURI); // Monk For API View

app.use(function (req, res, next) { req.db = db; next(); })

require('./routes.js')(app);

app.listen(port);
console.log('The smugglers are on port ' + port);