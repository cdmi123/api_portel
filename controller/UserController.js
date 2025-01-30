exports.dashboard = async (req,res) => {
    res.render('dashboard',{ page: req. protocol + '://' + req. get('host') + req. originalUrl });
}