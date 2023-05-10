var express = require('express');
var router = express.Router();

let mailController = require('../controller/mail.controller');

router.get('/', function (req, res) {
  res.render('index');
});
router.get('/index', function (req, res) {
  res.render('index');
});
// rounting
router.get('/home', function (req, res) {
  res.render('home');
});
router.get('/zHeart_Diseases', function (req, res) {
  res.render('zHeart_Diseases');
});
router.get('/Lung_Disease_Symtoms', function (req, res) {
  res.render('Lung_Disease_Symtoms');
});
router.get('/Obesity', function (req, res) {
  res.render('Obesity');
});
router.get('/Viral_Fever', function (req, res) {
  res.render('Viral_Fever');
});
router.get('/zAbout', function (req, res) {
  res.render('zAbout');
});
router.get('/Submit', function (req, res) {
  res.render('Submit');
});
router.post('/sendMail', mailController.sendCustomerMail);

module.exports = router;
