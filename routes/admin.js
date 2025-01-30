var express = require('express');
var router = express.Router();
var admin = require('../controller/AdminController');


// Login user and Register user
router.get('/',admin.login);
router.post('/',admin.login_user);

// manage dashboard
// router.get('/dashboard',admin.dashboard);


module.exports = router;
