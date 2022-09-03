const Product = require('../model/admin');
const { user } = require('../model/shop');

exports.saveproduct= (req,res,next)=>{
 const product = new Product(req.body.carname,req.body.carimageurl,req.body.price,req.body.Model,req.body.seats,req.body.colors,req.body.fuel,req.body.launch_year,req.body.category,req.body.Iimg1,req.body.Iimg2,req.body.Iimg3,req.body.Eimg1,req.body.Eimg2,req.body.Eimg3,req.body.Brand);
 
   product.save();
   res.render('admin-addproduct');
}

exports.addspecs=(req,res,next)=>{
  
    Product.addspecs(req.body.Scarname,req.body.Smodel,req.body.Scategory,req.body.tyresize,req.body.tankcapacity,req.body.suspension,req.body.groundclearance,req.body.Dimension,req.body.transmissiontype,req.body.emissionstd,req.body.maxtorque,req.body.maxpower,req.body.Engdisplacement,req.body.bluetoothaudio,req.body.grossweight).then(result=>{
    res.render('admin-addproduct');
  }).catch(err=>console.log(err));

  
}
exports.addproduct=(req,res,next)=>{
  if(req.session.user=='Admin@gmail.com')
    res.render('admin-addproduct');
    else
    res.send('<h1 style="text-align:center;">You Dont Have Access</h1>');
} 

exports.deleteupdate=(req,res,next)=>{
  
  if(req.session.user=="Admin@gmail.com")
  {
  Product.fetchByadminId().then(result=>{
    res.render('admin-updateDelete',{products:result[0]});
  }).catch(err=>console.log(err));
}
else{
  res.send('<h1 style="text-align:center;">You Dont Have Access</h1>');
}

}

exports.deleteproduct=(req,res,next)=>{
  
  Product.deleteByprodId(req.body.id).then(result=>{
    res.redirect('/admin/delete-update');
  }).catch(err=>console.log(err));
}

exports.update=(req,res,next)=>{
  Product.fetchByProdId(req.body.id).then(result=>{
   Product.fetchSpec(req.body.name).then(specs=>{ 
    
     res.render('update',{product:result[0],specs:specs[0][0]});
   })
  })
}

exports.savechanges=(req,res,next)=>{
  
    Product.SaveChanges(req.body.id,req.body.carname,req.body.carimageurl,req.body.price,req.body.Model,req.body.seats,req.body.colors,req.body.fuel,req.body.launch_year,req.body.category,req.body.Iimg1,req.body.Iimg2,req.body.Iimg3,req.body.Eimg1,req.body.Eimg2,req.body.Eimg3).then(result=>{
      res.redirect('/admin/delete-update');
    }).catch(err=>console.log(err));
};

exports.savespecchanges=(req,res,next)=>{
  Product.savespecchanges(req.body.Scarname,req.body.Smodel,req.body.Scategory,req.body.tyresize,req.body.tankcapacity,req.body.suspension,req.body.groundclearance,req.body.Dimension,req.body.transmissiontype,req.body.emissionstd,req.body.maxtorque,req.body.maxpower,req.body.Engdisplacement,req.body.bluetoothaudio,req.body.grossweight,req.body.id).then(result=>{
    res.redirect('/admin/delete-update');
  })
}

exports.fetchorders=(req,res,next)=>{
  if(req.session.user=="Admin@gmail.com")
  {
  Product.fetchorders().then(result=>{
    let date_ob = new Date();
   
    
    //   console.log(date_ob==result[0][0].delivery_date);
    
    res.render('orders',{products:result[0],curdate:date_ob});
  }).catch(err=>console.log(err));
}
else{
  res.send('<h1 style="text-align:center;">You Dont Have Access</h1>');
}

}
