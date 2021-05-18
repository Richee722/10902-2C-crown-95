const db =require('../utils/database');
const Clothing_95 =class Clothing_95{
    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id=id;
        this.name=name;
        this.cat_id=cat_id;
        this.price=price;
        this.remote_url=remote_url;
        this.local_url=local_url;
    }
    static fetchAll(){
        return db.execute('SELECT * from clothing_95')
    }
    staticf fetchProductsByCategory(cid){
        return db.execute('SELECT * from clothing_95 where cat_id=?',[cid]);
    }
}
module.exports = clothing_95;