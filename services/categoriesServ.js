const category_95 = require('../models/categoryModel_95');
exports.fetchCategories = async()=>{
    try{
        const [rows] = await category_95.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}