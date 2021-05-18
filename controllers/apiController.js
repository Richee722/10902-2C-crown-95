const category_95 = require('../models/categoryModel_95');
const categoriesServ = require('../services/categoriesServ')
exports.getCategories = async (req,res) =>{
    try{
        const data = await categoriesServ.fetchCategories();
        res.json(data);
    }catch(err){
        res.status(404).json(err);
    }

}