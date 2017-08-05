const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.json());

app.use('/',express.static(path.join(__dirname, '/')));

app.listen(process.env.POST || '3000');
