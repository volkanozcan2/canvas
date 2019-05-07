var express = require('express');
var router = express.Router();
var { randomBytes } = require("crypto");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DeMo', ver: ~~(Math.random() * 10) });
});
router.post('/', function(req, res, next) {
    let buf = req.body.test;
    let buff = new Buffer(buf);
    res.json({ status: `${buff.toString('base64')}||deneme` });
});
module.exports = router;