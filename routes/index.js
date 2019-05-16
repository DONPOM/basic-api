var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send("hello");
});

router.post('/newRequest', function(req, res, next) {
  let request = {
    long: req.body.long,
    lat: req.body.lat,
    zoom: req.body.zoom,
    apikey: req.body.apikey
  }
  console.log(request);
  res.sendStatus(200);
});

module.exports = router;
