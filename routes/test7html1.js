// Create a routes for home page.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render("test7html1.ejs");
});

module.exports = router;

