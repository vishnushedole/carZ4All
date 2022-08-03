const Product = require('../model/shop');
let prods =[];

exports.cars=(req,res,next)=>{
    Product.fetchAll().then(result=>{
    res.render('cars',{products:result[0]});
    }).catch(err=>console.log(err));
}

exports.search=(req,res,next)=>{
    Product.search(req.body.carname).then(result=>{
        res.render('cars',{products:result[0]});
    }).catch(err=>console.log(err));
}

exports.filter=(req,res,next)=>{
    Product.filter(req.body.range,req.body.category,req.body.fueltype).then(result=>{
        res.render('cars',{products:result[0]});
    }).catch(err=>console.log(err));
}
exports.viewcar=(req,res,next)=>{
    Product.getById(req.query.id).then(result=>{
       Product.getByname(req.query.carname).then(specs=>{
       
        res.render('view-car',{product:result[0][0],specs:specs[0][0]});
       }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
}