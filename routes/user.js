var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render('user/view-products', { admin: false, products });
  })
  
});
router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})

module.exports = router;
