require('dotenv/config');
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);
const app = express();

app.use(staticMiddleware);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

app.get('/api/businesses', (req, res, next) => {
  const { restaurant, location } = req.headers;

  if (!restaurant || !location) {
    throw new ClientError(400, 'restaurant and location are required');
  }

  client.search({
    term: restaurant,
    location: location
  }).then(response => {
    res.status(200).send(response.jsonBody.businesses);
  }).catch(err => next(err));
});
