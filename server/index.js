require('dotenv/config');
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();
const pg = require('pg');
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);
const fetch = require('node-fetch');

const db = new pg.Pool({
  connectionString: 'postgress://dev:dev@localhost/whatToEat',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.get(('/api/search'), (req, res, next) => {
  const { restaurant, location } = req.query;

  if (!restaurant || !location) {
    throw new ClientError(400, 'restaurant and location are required');
  }

  client.search({
    term: restaurant,
    location: location
  }).then(response => {
    res.status(200).send(response.jsonBody.businesses);
  }).catch(err => {
    if (err.statusCode === 400) {
      return res.json({ error: 'No results' });
    }
    next(err);
  });
});

app.get(('/api/location'), (req, res, next) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) {
    throw new ClientError(400, 'latitude and longitude are required');
  }
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const addressComponents = data.results[0].address_components;
      let zipCode = null;
      for (let i = 0; i < addressComponents.length; i++) {
        if (addressComponents[i].types[0] === 'postal_code') {
          zipCode = addressComponents[i].long_name;
        }
      }
      res.status(200).send(zipCode);
    })
    .catch(err => next(err));
});

app.get(('/api/business'), (req, res, next) => {
  const { businessId } = req.query;
  if (!businessId) {
    throw new ClientError(400, 'businessId is required');
  }
  const businessDetails = client.business(businessId);
  const businessReviews = client.reviews(businessId);
  Promise.all([businessDetails, businessReviews])
    .then(values => {
      res.status(200).send({ businessDetails: values[0].jsonBody, businessReviews: values[1].jsonBody });
    })
    .catch(err => next(err));
});

app.post(('/api/collection'), (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    throw new ClientError(400, 'name is required');
  }
  const sql = `
  insert into "collections" ("userId", "name")
  values (1, $1)
  returning *;
  `;
  const params = [name];
  const dbQuery = db.query(sql, params);
  dbQuery.then(result => {
    res.status(201).send(result.rows[0]);
  }).catch(err => next(err));
});

app.post(('/api/restaurant'), (req, res, next) => {
  const { collectionId, businessId } = req.body;
  if (!collectionId || !businessId) {
    throw new ClientError(400, 'collectionId and businessId are required');
  }
  client.business(businessId)
    .then(response => {
      const json = response.jsonBody;
      const sql = `
      insert into "restaurants" ("collectionId", "businessId", "json")
      values ($1, $2, $3)
      returning *;
      `;
      const params = [collectionId, businessId, json];
      const dbQuery = db.query(sql, params);
      dbQuery.then(result => {
        res.status(201).send(result.rows[0]);
      }).catch(err => next(err));
    })
    .catch(err => next(err));
});

// app.get(('/api/collections'), (req, res, next) => {
//   const sql = `
//   select "c"."name",
//          "c"."collectionId",
//          "r"."json",
//          "r"."businessId",
//          count ("r"."collectionId")
//     from "collections" as "c"
//     left join "restaurants" as "r" on "r"."collectionId" = "c"."collectionId"
//    where "userId" = $1
//    group by "c"."collectionId";
//   `;

//   const params = [1];
//   const dbQuery = db.query(sql, params);
//   dbQuery.then(result => {
//     res.status(200).send(result.rows);
//   }).catch(err => next(err));
// });

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
