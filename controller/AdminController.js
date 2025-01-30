var UserModel = require('../model/AdminModel');

var email_msg = "";

exports.login = async(req,res) => {
        res.render("admin/index")
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
