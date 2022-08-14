const Product = require('../model/shop');
const bcrypt = require('bcrypt');
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
    if(req.body.category==undefined || req.body.range==undefined || req.body.fueltype==undefined)
    {
        res.render('cars',{products:[]});
    }
    else
    {
    Product.filter(req.body.range,req.body.category,req.body.fueltype).then(result=>{
        res.render('cars',{products:result[0]});
    }).catch(err=>console.log(err));
     }
}
exports.viewcar=(req,res,next)=>{
    Product.getById(req.query.id).then(result=>{
       Product.getByname(req.query.carname).then(specs=>{
        res.render('view-car',{product:result[0][0],specs:specs[0][0]});
       }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
}
exports.services=(req,res,next)=>{
    res.render('services');
}
exports.compare=(req,res,next)=>{
    res.render('compare',{cars:[]});
}
exports.comparecars=(req,res,next)=>{
    
    Product.getcars(req.query.car1,req.query.car2,req.query.model1,req.query.model2).then(result=>{
        
       if(result[0].length==1)
       res.render('compare',{cars:[]});
       else
        res.render('compare',{cars:result[0]});
    }).catch(err=>{
        console.log(err);
    })
   
}
exports.Lowhigh=(req,res,next)=>{
    Product.sort(1).then(result=>{
        res.render('cars',{products:result[0]});
    })
}
exports.Highlow=(req,res,next)=>{
    Product.sort(2).then(result=>{
        res.render('cars',{products:result[0]});
    })
}
exports.Newold=(req,res,next)=>{
    Product.sort(3).then(result=>{
        res.render('cars',{products:result[0]});
    })
}
exports.Oldnew=(req,res,next)=>{
    Product.sort(4).then(result=>{
        res.render('cars',{products:result[0]});
    })
}
exports.home=(req,res,next)=>{
    if(req.session.user)
    {
        res.render("protected");
    }else{
        res.render("index");
    }
}
exports.signup=(req,res,next)=>{
    res.render('signup');
}
exports.add_User=(req,res,next)=>{
    // console.log(req.body);
    Product.adduser(req,res).then(result=>{
           
           res.render('protected'); 
        },err=>{
            console.log(err);
        });
}
exports.logout=(req, res)=>{
    if(req.session.user)
    {
     req.session.destroy(()=>{
        
         res.clearCookie("user_sid");
         res.redirect('/');
     });
    }
 }

exports.login=(req, res)=>{
    if(!req.body.username || !req.body.password)
    {
        res.send("Please enter username and password");
    }
    else
    {
        Product.login(req).then(results=>{
        
            var resultArray = Object.values(JSON.parse(JSON.stringify(results)));
        //   console.log(resultArray);
           if(resultArray.length==0){
            res.send("Account with given username does not exist");
           }
            else{
                var correctPW = resultArray[0][0].password;
               
                bcrypt.compare(req.body.password, correctPW, async(err, isMatch)=>{
                if(isMatch){
                    req.session.user = req.body.username;
        
                    res.redirect('/protected_page');
                  
                }
                else{
                    res.send("Incorrect Username or Password");
                }
                });
            }
        },err=>{
            console.log(err);
        });
    }
}
exports.protPage=(req, res)=>{
    if(req.session.user){
        res.render("protected", {id: req.session.user.id});
    }
    else{
        res.redirect('/');
    } 
}



        