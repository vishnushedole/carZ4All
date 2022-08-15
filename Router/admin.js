const express=require('express');
const Router=express.Router();
const admincontroller = require('../controllers/admin');
Router.get('/addproduct',admincontroller.addproduct);

Router.post('/saveproduct',admincontroller.saveproduct);

Router.post('/addspecs',admincontroller.addspecs);
Router.get('/delete-update',admincontroller.deleteupdate);

Router.post('/delete-product',admincontroller.deleteproduct);

Router.post('/update',admincontroller.update);

Router.post('/savechanges',admincontroller.savechanges);

Router.post('/savespecchanges',admincontroller.savespecchanges);

Router.get('/orders',admincontroller.fetchorders);

module.exports = Router;