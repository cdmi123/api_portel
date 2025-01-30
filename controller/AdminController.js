var UserModel = require('../model/AdminModel');
var CategoryModel = require('../model/CategoryModel');


var email_msg = "";

exports.login = async(req,res) => {
        res.render("admin/index")
}

exports.login_user = async (req,res) => {
        var data = await UserModel.find({"email":req.body.email})
        if(data.length==1)
        {
                if(data[0].password==req.body.password){
                        res.redirect('/admin/dashboard');
                }else{
                        res.redirect('/');
                }
        }
        else{
                res.redirect('/');
        }
}


exports.dashboard = async (req,res) => {
        res.render('admin/dashboard')
}

exports.add_category = async (req,res) => {
        res.render('admin/add_category')
}

exports.add_category_data = async (req,res) => {
        CategoryModel.create(req.body);
        res.redirect('/admin/view_category')
}

exports.view_category = async (req,res) => {
        var data = await CategoryModel.find();
        res.render('admin/view_category',{data})
}