const admin = require('firebase-admin');
const serviceAccount = require('./keys/stolen-bikes-127db-firebase-adminsdk-nxcbl-84cce71d82.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// [DB] Bikes -> id, number, status
// [DB] Officers -> id, bike_id, status

const db = admin.firestore();