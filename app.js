const admin = require("firebase-admin");
const express = require("express");
const crypto = require("crypto");
const serviceAccount = require("./keys/stolen-bikes-127db-firebase-adminsdk-nxcbl-84cce71d82.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/vue/dist/index.html`);
});

app.use("/", express.static(`${__dirname}/vue/dist`));

app.get("/api/bikes", async (req, res) => {
  const bikes_db = (await db.collection("bikes").get()).docs;
  const bikes = bikes_db.map(bike => {
    return {
      id: bike.id,
      ...bike.data(),
    };
  });

  res.status(200).send(bikes);
});

// POST JSON -> {number: ...}
app.post("/api/bikes", async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  try {
    const bike_id = crypto.createHash("md5").update(req.body.number).digest("hex");
    const new_bike = db.collection("bikes").doc(bike_id);

    const is_bike_exists = (await new_bike.get()).exists;
    if(is_bike_exists) return res.sendStatus(502);

    const officers_db = await db.collection("officers").where('status', '==', 'free').limit(1).get();

    const has_free_officer = officers_db.size === 1;
    const bike_status = has_free_officer ? 'wip' : 'new';

    if(has_free_officer) {
      const officer_id = officers_db.docs[0].id;

      db.collection("officers").doc(officer_id).set({
        bike_id: bike_id,
        status: 'busy'
      });
    }

    new_bike.set({
      number: req.body.number,
      status: bike_status,
    });

    res.status(200).send({
      id: bike_id
    });
  } catch (e) {
    res.status(502).send(e);
  }
});

app.get("/api/:bike_id/info", async (req, res) => {
  try {
    const bike_db = db.collection("bikes").doc(req.params.bike_id);
    const bike_info = (await bike_db.get()).data();

    if(bike_info) {
      return res.status(200).send({
        status: bike_info.status
      });
    }
    
    res.sendStatus(502);
  } catch (e) {
    res.status(502).send(e);
  }
});

app.get("/api/:officer_id/bike", async (req, res) => {
  try {
    const officer_db = db.collection("officers").doc(req.params.officer_id);
    const officer_info = (await officer_db.get()).data();

    if(officer_info) {
      if(officer_info.status === 'free') return res.status(200).send({});

      const bike_db = db.collection("bikes").doc(officer_info.bike_id);
      const bike = await bike_db.get();

      return res.status(200).send({
        id: bike.id,
        ...bike.data()
      });
    }
    
    res.sendStatus(502);
  } catch (e) {
    res.status(502).send(e);
  }
});

// POST JSON -> {officer_id: ...}
app.post("/api/findBike", async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  try {
    const officer_db = db.collection("officers").doc(req.body.officer_id);
    const officer_info = (await officer_db.get()).data();

    if(officer_info && officer_info.status === 'busy') {
      const bike_db = db.collection("bikes").doc(officer_info.bike_id);
      const bike_info = (await bike_db.get()).data();

      bike_db.set({
        ...bike_info,
        status: 'found'
      });

      const new_bike = (await db.collection("bikes").where('status', '==', 'new').limit(1).get()).docs[0];

      officer_db.set({
        bike_id: new_bike ? new_bike.id : '',
        status: new_bike ? 'busy' : 'free'
      });

      if(new_bike) {
        db.collection("bikes").doc(new_bike.id).set({
          ...new_bike.data(),
          status: 'wip'
        });
      }

      return res.sendStatus(200);
    }
    
    res.sendStatus(502);
  } catch (e) {
    res.status(502).send(e);
  }
});

app.listen(3000);

module.exports = app;