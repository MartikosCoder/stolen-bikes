const admin = require("firebase-admin");
const express = require("express");
const crypto = require("crypto");
const serviceAccount = require("./keys/stolen-bikes-127db-firebase-adminsdk-nxcbl-84cce71d82.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const app = express();
const md5 = crypto.createHash("md5");
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/vue/dist/index.html`);
});

app.use("/", express.static(`${__dirname}/vue/dist`));

app.get("/api/bikes", async (req, res) => {
  const bikes_db = await db.collection("bikes").get();
  const bikes = [];

  bikes_db.forEach((bike) => {
    bikes.push({
      id: bike.id,
      ...bike.data(),
    });
  });

  res.status(200).send(bikes);
});

// POST JSON -> {number: ...}
app.post("/api/bikes", async (req, res) => {
  if (!req.body) return res.status(400);

  try {
    const document_id = md5.update(req.body.number).digest("hex");
    const new_bike = db.collection("bikes").doc(document_id);

    await new_bike.set({
      number: req.body.number,
      status: "new",
    });

    res.status(200).send();
  } catch (e) {
    res.status(502).send(e);
  }
});

app.listen(3000);

// [DB] Bikes -> id, number, status
// [DB] Officers -> id, bike_id, status
