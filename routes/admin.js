var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"ASUS ROG Strix G15 (2020)",
      category:"Laptops",
      description:"ASUS ROG Strix G15 Octa Core i7 10th Gen 16 GB/1 TB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Ti/144 Hz)"
      ,image:"https://dlcdnwebimgs.asus.com/gain/546A0081-35C3-488F-BA26-EA2FFBC9E79F"
    },

    {
      name:"Lenovo Legion Y540",
      category:"Laptops",
      description:"Lenovo Legion Y540 9th Gen Intel Core i5-9300HF 15.6 (39.63cm) FHD IPS Gaming Laptop (8GB/1TB + 256GB SSD/Windows 10/NVIDIA GTX 1650 4GB/60Hz Refresh Display/Raven Black/2.3Kg)"
      ,image:"https://www.lenovo.com/medias/LegionY540-15-88GMY501214-725x515.png?context=bWFzdGVyfHJvb3R8MjMxMzAyfGltYWdlL3BuZ3xoN2YvaDUxLzExNjQ5NjE2Mzc5OTM0LnBuZ3xlZmZhN2I3NDQxY2VjZWZkMjk5YWI1YTZjMTM3NjgyZWIxMDYzNjE1NzljMTUwZmQ5ZTkxYmE3MDIxYTNjNjgx"
    },

    {
      name:"HP Pavilion Gaming",
      category:"Laptops",
      description:"HP Pavilion Gaming 15.6-inch(39.62 cms) FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1024AX"
      ,image:"https://images-na.ssl-images-amazon.com/images/I/71FeUtw%2BTPL._SY450_.jpg"
    },

    {
      name:"Acer Swift 3",
      category:"Laptops",
      description:"Acer Swift 3 SF313-52 13.5-inch (34.29 cms) Laptop (10th Gen Intel Core i5-1035G4 processor/8GB/512GB SSD/Window 10 Home 64Bit/Integrated Graphics), Silver"
      ,image:"https://images-na.ssl-images-amazon.com/images/I/81X6Nf5rAhL._SL1500_.jpg"
  }]
  res.render('admin/view-products',{admin:true,products});
});

module.exports = router;
