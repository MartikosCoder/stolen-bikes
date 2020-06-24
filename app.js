const admin = require('firebase-admin');
const express = require('express');
const serviceAccount = require('./keys/stolen-bikes-127db-firebase-adminsdk-nxcbl-84cce71d82.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/vue/dist/index.html`);
});

app.use('/', express.static(`${__dirname}/vue/dist`));

app.listen(3000);

// [DB] Bikes -> id, number, status
// [DB] Officers -> id, bike_id, status

const db = admin.firestore();