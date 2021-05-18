const category_95 = require('../models/categoryModel_95');
exports.getHomepage = async(req,res)=>{
    let data;
  const [rows] = await category_95.fetchAll();
  data=rows;
  //res.json(data);
   res.render('crown2_95', { title: 'ChenChi Lin 408411295(async/await)', data: categories });
}
exports.getProductsByCategory = async (req,res)=>{
    let data={};
    data.cid = 0;
    if(req.params.product=== 'hats')data.cid = 1;
    else if (req.params.product === 'jacket')data.cid = 2;
    else if (req.params.product === 'sneaker')data.cid = 3;
    else if (req.params.product === 'women')data.cid = 4;
    else if (req.params.product === 'men')data.cid = 5;
}