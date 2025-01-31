var CategoryModel = require('../model/CategoryModel');
var APIModel = require('../model/apimodel');


function Get_Url(req) {
    var url_page = req. protocol + '://' + req. get('host') + req. originalUrl;
    return url_page;
}


exports.dashboard = async (req,res) => {

    var API_Category = await CategoryModel.find();

    res.render('dashboard',{API_Category});
}



exports.view_api = async (req,res) => {

    var url_page = Get_Url(req);
    var id = req.params.id;
    var API_data = await APIModel.find({cat_id:id});
    res.render('view_api',{ url_page , API_data});

}