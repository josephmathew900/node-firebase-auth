var express = require('express');
var app = express();
let authorized = true;
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = require("./config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodefirebase-d00d5.firebaseio.com"
});

app.use(cors());

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin.auth().verifyIdToken(req.headers.authtoken)
      .then(() => {
        next()
      }).catch(() => {
        res.status(403).send('Unauthorized')
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}

app.use('/', checkAuth);

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!'
    });
  });

app.listen(3000);