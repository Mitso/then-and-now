const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.sendFile(path + "index.html");
  //res.render('index', { title: 'Express' });
});

module.exports = router;
