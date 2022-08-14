const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const app=express();
const adminRouter= require('./Router/admin');
const shopRouter= require('./Router/shop');
const bodyparser = require('body-parser');
const path = require('path');
app.set('view engine','ejs');
app.set('views','views');

app.use(cookieParser());
app.use(session({key:'user_sid',secret:"AuthenticationUsingNodeAndExpressJSForLoginandSignup", cookie: {expires:600000}, saveUninitialized:false, resave:false
}));
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials:true
}));

app.use(bodyparser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter);
app.use('/',shopRouter);
app.listen(3000);

