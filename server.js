const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');

const port = process.env.PORT || 5000;

const services = require('./data/services.json');
const questions_262 = require('./data/262-questions.json');
const questions_399 = require('./data/399-questions.json');

dotenv.config();
const app = express();

app.use(
  morgan(
    ':date - :method :url :status :res[content-length] - :response-time ms'
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function dummyApi(resObj) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resObj);
    }, 1500);
  });
}

app.get('/api/services', async (req, res) => {
  const result = await dummyApi(services);

  res.json({ services: result });
});

app.get('/api/questions/:serviceId', async (req, res) => {
  let questions;

  switch (req.params.serviceId) {
    case '262':
      questions = questions_262;
      break;
    case '399':
      questions = questions_399;
      break;
    default:
      questions = [];
      break;
  }

  const totalPages =
    questions.sort((a, b) => b.pageNumber - a.pageNumber)[0].pageNumber + 1;

  const result = await dummyApi({
    questions,
    totalPages,
  });

  res.json(result);
});

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });
}

app.listen(port, () => [console.log('Listening at Port #', port)]);
module.exports = app;
