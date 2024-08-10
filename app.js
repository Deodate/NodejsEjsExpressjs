const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require('pg');

require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}`));
