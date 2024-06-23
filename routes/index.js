var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});


router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});



router.get('/forget', function(req, res, next) {
  res.render('forget', { title: 'Express' });
});



router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});





module.exports = router;
