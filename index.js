const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

const User = require('./UserModel');



mongoose.connect('mongodb://127.0.0.1:27017/express-zad1');


app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs'); 


app.get('/', function(req, res) {
        User.find().then((user) => {
        console.log(user);
        // res.render('home', {
        //     name: "Tomek"
        // });
        res.render('home');

    }).catch((err) => {
            res.send(err);
        });   
});


app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});