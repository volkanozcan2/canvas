const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DeMo', ver: process.env.NODE_ENV });
});

module.exports = router;