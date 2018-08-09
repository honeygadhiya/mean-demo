const express = require('express');
const bodyParser = require('body-parser');

// var bodyParser = require('body-parser');
const app = express(); // the main app
const routes = require('./routes/routes.js');
// const winston = require('winston');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));


app.use('/', routes);
app.use(express.static('./public'));


app.listen(process.env.PORT || 8088,'65.49.37.156',function(){
    console.log("Express server listening on port 8088", );
  });
