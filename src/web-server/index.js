
const express = require('express');
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// todo: include body parsers, cookie parsers, session parsers... etc etc.

module.exports = app;