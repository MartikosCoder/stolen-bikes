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
    const md5 = crypto.createHash("md5");
    const bike_id = md5.update(req.body.number).digest("hex");
    const new_bike = db.collection("bikes").doc(bike_id);

    const is_bike_exists = (await new_bike.get()).exists;
    if(is_bike_exists) return res.sendStatus(502);

    const officers_db = await db.collection("officers").where('status', '==', 'free').limit(1).get();

    const has_free_officer = officers_db.size === 1;
    const bike_status = has_free_officer ? 'wip' : 'new';

    if(has_free_officer) {
      const officer_id = officers_db.docs[0].id;

      await db.collection("officers").doc(officer_id).set({
        bike_id: bike_id,
        status: 'busy'
      });
    }

    await new_bike.set({
      number: req.body.number,
      status: bike_status,
    });

    res.sendStatus(200);
  } catch (e) {
    res.status(502).send(e);
  }
});

app.listen(3000);

// [DB] Bikes -> id, number, status
// [DB] Officers -> id, bike_id, status
