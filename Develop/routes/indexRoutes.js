const express = require('express');

const notesRouter = require('./notesRoutes')
const apiRouter = require('./apiRoutes')

const app = express();

app.use('/notesRoutes', notesRouter);
app.use('/apiRoutes', apiRouter);

module.exports = app; 