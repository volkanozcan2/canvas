const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DeMo', ver: req.headers["user-agent"] });
});

module.exports = router;