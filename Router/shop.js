const express = require('express');
const Router = express.Router();
const controller = require('../controllers/shop');
Router.get('/cars',controller.cars);

Router.post('/search_cars',controller.search);

Router.post('/filter',controller.filter);

Router.get('/viewcar',controller.viewcar);

Router.get('/services',controller.services);

Router.get('/compare',controller.compare);

Router.get('/comparecars',controller.comparecars);

Router.get('/LowtoHigh',controller.Lowhigh);

Router.get('/HightoLow',controller.Highlow);

Router.get('/NewtoOld',controller.Newold);

Router.get('/Oldtonew',controller.Oldnew);

Router.get('/',controller.home);

Router.get('/signup',controller.signup);

Router.post('/addUser',controller.add_User);

Router.get('/logout', controller.logout);

Router.post('/login',  controller.login);

Router.get('/protected_page',controller.protPage);

Router.get('/brands',controller.brands);

Router.get('/book',controller.book);

Router.post('/placeBooking',controller.placeBooking);

Router.get('/my_bookings',controller.cart);

module.exports =Router;