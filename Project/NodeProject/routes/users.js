var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("users",{message:" respond with a resources"} )
  // res.send('respond with a resource');
});

module.exports = router;
