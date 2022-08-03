const db=require('../util/database');

module.exports = class Product{
    static fetchAll(){
        return db.execute('select * from products');
    }
    static search(carname){
        return db.execute(`select * from products where carname='${carname}'`);
    }
    static filter(range,category,Fuel){
        let R=range.split("-");
        R[0]=parseInt(R[0]);
        R[1]=parseInt(R[1]);
        return db.execute(`select * from products where price>=${R[0]} and price<=${R[1]} and category='${category}' and Fuel='${Fuel}'`);
    }
    static getById(id)
    {
        return db.execute(`select * from products where id=${id}`);
    }
    static getByname(carname)
    {
        return db.execute(`select * from specifications where carname='${carname}'`);
    }
}