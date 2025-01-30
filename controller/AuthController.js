var UserModel = require('../model/AuthModel');

var email_msg = "";

exports.login = async(req,res) => {
        res.render("index")
}

exports.login_user = async (req,res) => {
        var data = await UserModel.find({"email":req.body.email})
        if(data.length==1)
        {
                if(data[0].password==req.body.password){
                        res.redirect('/dashboard');
                }else{
                        res.redirect('/');
                }
        }
        else{
                res.redirect('/');
        }
}

exports.register = async(req,res) => {
        res.render("register",{email_msg})
}

exports.register_user = async(req,res) => {
        try {
                var data = await UserModel.create(req.body);
                res.redirect("/");
        } catch (error) {
                email_msg = error.errmsg;  
                res.redirect("/register");
        }
}
