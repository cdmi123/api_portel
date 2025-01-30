var express = require('express');
var router = express.Router();
var admin = require('../controller/AdminController');


// Login user and Register user
router.get('/',admin.login);
router.post('/',admin.login_user);

// manage dashboard
router.get('/dashboard',admin.dashboard);

router.get('/add_category',admin.add_category);
router.post('/add_category',admin.add_category_data);

router.get('/view_category',admin.view_category);



module.exports = router;
