const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Create the handlebars engine
const hbs = exphbs.create({
  extname: '.hbs'
});

// Set up handlebars view engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Router
app.get('/', (req, res) => {
    res.render('layouts/main');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
