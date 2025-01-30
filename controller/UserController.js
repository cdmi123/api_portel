var CategoryModel = require('../model/CategoryModel');


exports.dashboard = async (req,res) => {

    var API_Category = await CategoryModel.find();

    res.render('dashboard',{ page: req. protocol + '://' + req. get('host') + req. originalUrl , API_Category});
}