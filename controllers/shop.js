const Product = require('../model/shop');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let prods =[];

exports.cars=(req,res,next)=>{
    Product.fetchAll().then(result=>{
    res.render('cars',{products:result[0],user:req.session.user});
    }).catch(err=>console.log(err));
}

exports.search=(req,res,next)=>{
    Product.search(req.body.carname).then(result=>{
        res.render('cars',{products:result[0],user:req.session.user});
    }).catch(err=>console.log(err));
}

exports.filter=(req,res,next)=>{
    if(req.body.category==undefined || req.body.range==undefined || req.body.fueltype==undefined)
    {
        res.render('cars',{products:[],user:req.session.user});
    }
    else
    {
    Product.filter(req.body.range,req.body.category,req.body.fueltype).then(result=>{
        res.render('cars',{products:result[0],user:req.session.user});
    }).catch(err=>console.log(err));
     }
}
exports.viewcar=(req,res,next)=>{
    Product.getById(req.query.id).then(result=>{
       Product.getByname(req.query.name).then(specs=>{
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
        res.render('cars',{products:result[0],user:req.session.user});
    })
}
exports.Highlow=(req,res,next)=>{
    Product.sort(2).then(result=>{
        res.render('cars',{products:result[0],user:req.session.user});
    })
}
exports.Newold=(req,res,next)=>{
    Product.sort(3).then(result=>{
        res.render('cars',{products:result[0],user:req.session.user});
    })
}
exports.Oldnew=(req,res,next)=>{
    Product.sort(4).then(result=>{
        res.render('cars',{products:result[0],user:req.session.user});
    })
}
exports.home=(req,res,next)=>{
    if(req.session.user)
    {
        res.render("protected",{user:req.session.user});
    }else{
        res.render("index",{user:req.session.user});
    }
}
exports.signup=(req,res,next)=>{
    res.render('signup',{user:req.session.user});
}
exports.add_User=(req,res,next)=>{
    // console.log(req.body);
    const pw = req.body.password;
            const cpw = req.body.confirm;
            let hashedPW;
            if(pw!=cpw)
            {
                res.send("Passwords don't match"); 
            }
            if(req.body.password==""||req.body.confirm==""||req.body.username==""||req.body.firstname==""||req.body.lastname=="")
            if(pw === cpw){
                var rand = Math.floor(Math.random() * 100);
                // hashing 
                bcrypt.hash(pw, saltRounds, (err, hash)=>{
                    if(err){
                        return console.log('Cannot encrypt');
                    }
                    else{
                         hashedPW = hash;
                         Product.adduser(req,hashedPW,rand).then(result=>{
                            req.session.user = req.body.username;
                            res.render('protected',{user:req.session.user}); 
                            },err=>{
                                console.log(err);
                            });
                    }
                }); 
               
            }
          

}
exports.logout=(req, res)=>{
 
    if(req.session.user)
    {
     req.session.destroy((result,err)=>{
     });
     res.clearCookie("user_sid");  
     res.redirect('/');
    }
    else
    {
        res.send('<h1>You are Not logged in</h1>')
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
        res.render("protected", {id: req.session.user.id,user:req.session.user});
    }
    else{
        res.redirect('/');
    } 
}

exports.brands=(req, res)=>{
    
    Product.brands(req.query.brand).then(result=>{
        
        res.render('brands',{results:result[0]});
    }).catch(err=>{
        console.log(err);
    }); 
}
exports.book=(req, res)=>{
    
    if(req.session.user){
        Product.book(req.query.name).then(results=>{
            
            Product.user(req.session.user).then(userD=>{
            
                res.render("book", {results:results[0][0],user:userD[0][0]});
             }).catch(err=>console.log(err));
        }).catch(err=>{
            console.log(err);
        });
        
     }
     else{
         res.send('<h1 style="text-align:center">Please Login to continue<h1>');
     }
}
exports.placeBooking=(req, res)=>{
  
    Product.placeBooking(req.body.carname,req.body.brand,req.body.model,req.body.price,req.body.payment_mode,req.body.colour,req.body.cust_name,req.body.fuel_type,req.body.ID).then(result=>{
        res.send('<h1 style="text-align:center">Booking successfully done<h1>');
    }).catch(err=>{
        console.log(err);
    });
}
        
exports.cart=(req,res)=>{
    Product.getcart(req.query.user).then(result=>{
        let date_ob = new Date();
        
        res.render('cart',{products:result[0],curdate:date_ob});
      }).catch(err=>console.log(err));
}