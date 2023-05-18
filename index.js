const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/express-blog');


app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs'); 


app.get('/', function(req, res) {
    res.render('home');
});

app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});