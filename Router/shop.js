const express = require('express');
const Router = express.Router();
const controller = require('../controllers/shop');
Router.get('/cars',controller.cars);

Router.post('/search_cars',controller.search);

Router.post('/filter',controller.filter);

Router.get('/viewcar',controller.viewcar);
module.exports =Router;