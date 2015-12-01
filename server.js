'use strict';
var express = require('express');
var app = express();
var build = '/dist';
var port = process.env.PORT || 3001;
var path = require('path');

// app.use(compression());
app.use(express.static(path.join(__dirname, build)));

app.listen(port);
console.log('server started on local host port:', port);
