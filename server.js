const express = require('express');
const app=express();
const adminRouter= require('./Router/admin');
const shopRouter= require('./Router/shop');
const bodyparser = require('body-parser');
const path = require('path');
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyparser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter);
app.use('/',shopRouter);
app.listen(3000);