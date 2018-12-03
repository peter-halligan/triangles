const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const triangleRouter = require('./routes/triangle-type');

const app = express();

if (app.get('env') === 'production') {
  app.use(logger('common', { skip(req, res) { return res.statusCode < 400; }, stream: `${__dirname}/../morgan.log` }));
} else {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/triangle', triangleRouter);
// custom error handler
app.use((err, req, res, next) => {
  if (err.message === 'not_enough_arguments') {
    return res.status(400).send({ error: 'Not Enough Arguments' });
  } if (err.message === 'invalid_arguments') {
    return res.status(400).send({ error: 'Invalid Arguments' });
  }
  return next(err);
});

module.exports = app;
