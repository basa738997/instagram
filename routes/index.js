var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Homepage | SocialMedia", user: req.user });
});

router.get('/register', function(req, res, next) {
  res.render('register',{ title: "Register | SocialMedia", user: req.user });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: "Login | SocialMedia", user: req.user });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact | SocialMedia", user: req.user });
});


router.get('/profile', function(req, res, next) {
  res.render('profile', { title: "Profile | SocialMedia", user: req.user });
});



router.get('/forget', function(req, res, next) {
  res.render('forget', { title: "Forget | SocialMedia", user: req.user });
});



router.get('/about', function(req, res, next) {
  res.render('about', { title: "About | SocialMedia", user: req.user });
});





module.exports = router;
