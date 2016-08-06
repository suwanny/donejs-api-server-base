const express = require('express');
const morgan = require('morgan');
const path = require('path');
const winston = require('winston');
const bodyParser = require('body-parser');
const compression = require('compression');
const responseTime = require('response-time');
const doneSSR = require('done-ssr-middleware');
const app = express();
const listenPort = process.env.PORT || 8080;
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = `${path.join(process.cwd(), 'public', 'package.json')}!npm`;
const options = {};

global.logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({'timestamp': true, 'level': 'debug'})
  ]
});

app.use(compression());

// routes
app.use('/api/todos', require('./lib/routes/todos'));

app.use(express.static(__dirname + '/public'));
app.use(doneSSR({ config, options }));
app.use(morgan('dev'));
app.use(responseTime());
app.listen(listenPort);

logger.info('App started and listening to', listenPort);
