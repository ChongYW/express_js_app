const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./routes');
const configdb = require('./config/database')
const bodyParser = require('body-parser');

const app = express();

// Set the view engine to ejs.
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(configdb.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// app.use('/api', routes);
app.use('/', routes);

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});