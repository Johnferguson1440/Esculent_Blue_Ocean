var express = require('express');
var router = express.Router();

/* GET home page. 
Selection route 
params 
breakfast lunch and dinner 

post username date option breakfast lunch dinner
req.body 
get and post
sending back each meal 
*/


// post/api/newUser


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
