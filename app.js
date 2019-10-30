const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/book', bookRoutes);

module.exports = app;
