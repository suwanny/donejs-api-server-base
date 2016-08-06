const endpoint = require('express').Router();
const bodyParser = require('body-parser');

endpoint.use(bodyParser.json());

endpoint.use(function (req, res, next) {
  logger.info('headers', req.headers);
  next();
});


endpoint.get('/', function(req, res) {
  res.status(200).json({
    ok: true,
    data: [
      'study',
      'exercise'
    ]
  });
});

endpoint.get('/:id', function(req, res) {
  res.status(200).json({
    ok: true,
    data: req.params
  });
});

module.exports = endpoint;
