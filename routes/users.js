var express = require('express');
var router = express.Router();
var auth = require('../controller/AuthController');
var user = require('../controller/UserController');


// Login user and Register user
router.get('/',auth.login);
router.post('/',auth.login_user);
router.get('/Register',auth.register);
router.post('/Register',auth.register_user);

// manage dashboard
router.get('/dashboard',user.dashboard);
router.get('/view_api/:id',user.view_api);





module.exports = router;
