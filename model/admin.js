const db=require('../util/database');

module.exports = class Product{
    constructor(carname,carimageurl,price,model,seats,colors,fuel,launch_year,category,Iimg1,Iimg2,Iimg3,Eimg1,Eimg2,Eimg3)
    {
        this.carname=carname;
        this.carimageurl=carimageurl;
        this.price=price;
        this.model=model;
        this.seats=seats;
        this.colors=colors;
        this.fuel=fuel;
        this.launch_year=launch_year;
        this.category=category;
        this.Iimg1=Iimg1;
        this.Iimg2=Iimg2;
        this.Iimg3=Iimg3;
        this.Eimg1=Eimg1;
        this.Eimg2=Eimg2;
        this.Eimg3=Eimg3;
    }


    save(){
        
     return db.execute('insert into products (id,carname,imageurl,price,model,seats,colors,fuel,launch_year,category,Iimg1,Iimg2,Iimg3,Eimg1,Eimg2,Eimg3) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[0,this.carname,this.carimageurl,this.price,this.model,this.seats,this.colors,this.fuel,this.launch_year,this.category,this.Iimg1,this.Iimg2,this.Iimg3,this.Eimg1,this.Eimg2,this.Eimg3]);
    }
    static addspecs(carname,model,category,tyresize,tankcapacity,suspension,groundclearance,Dimension,transmissiontype,emissionstd,maxtorque,maxpower,Engdisplacement,bluetoothaudion,grossweight){
        
       return db.execute('insert into specifications (carname,model,category,tyresize,tankcapacity,suspension,groundclearance,Dimension,transmissiontype,emissionstd,maxtorque,maxpower,Eng_displacement,bluetoothaudio,grossweight) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[carname,model,category,tyresize,tankcapacity,suspension,groundclearance,Dimension,transmissiontype,emissionstd,maxtorque,maxpower,Engdisplacement,bluetoothaudion,grossweight]);
    }
    static fetchByadminId()
    {
        return db.execute('select * from products');
    }
    static deleteByprodId(id)
    {
        return db.execute('delete from products where id=(?)',[id]);
    }
    static fetchByProdId(id)
    {
        return db.execute('select * from products where id=(?)',[id]);
    }
    static fetchSpec(name)
    {  
        return db.execute('select * from specifications where carname=(?)',[name]);
    }
    static SaveChanges(id,carname,carimageurl,price,model,seats,colors,fuel,launch_year,category,Iimg1,Iimg2,Iimg3,Eimg1,Eimg2,Eimg3)
    { 
       return db.execute(`update products set carname='${carname}' ,imageurl='${carimageurl}',price='${price}' ,model='${model}',seats=${seats},colors='${colors}',fuel='${fuel}',launch_year=${launch_year},category='${category}' ,Iimg1='${Iimg1}',Iimg2='${Iimg2}',Iimg3='${Iimg3}',Eimg1='${Eimg1}',Eimg2='${Eimg2}',Eimg3='${Eimg3}' where id=${id}`); 
    }
    static savespecchanges(carname,model,category,tyresize,tankcapacity,suspension,groundclearance,Dimension,transmissiontype,emissionstd,maxtorque,maxpower,Engdisplacement,bluetoothaudion,grossweight,id)
    {
        return db.execute(`update specifications set carname='${carname}' ,model='${model}',category='${category}' ,tyresize='${tyresize}',tankcapacity='${tankcapacity}',suspension='${suspension}',groundclearance='${groundclearance}',dimension='${Dimension}',transmissiontype='${transmissiontype}',emissionstd='${emissionstd}',maxtorque='${maxtorque}',maxpower='${maxpower}',Eng_displacement='${Engdisplacement}',bluetoothaudion='${bluetoothaudion}',grossweight='${grossweight}' where id=${id}`);
    }
    static fetchorders()
    {
        return db.execute(`select * from Bookings`);
    }
    // save(){
    //     db.getConnection(function(err, conn) {
    //         // Do something with the connection
    //         console.log(this.carname);
    //         conn.query('insert into products (id,carname,imageurl,discription,productscol) values (?,?,?,?,?)',[,this.carname,this.carimageurl,this.cardiscription,]);
    //         // Don't forget to release the connection when finished!
    //         db.releaseConnection(conn);
    //      });
    // }
    
}