const functions = require("firebase-functions");
const firebaseAdmin = require("firebase-admin");

firebaseAdmin.initializeApp();

exports.homepage_images = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("homepage_images");
  db.orderBy("lastupdate", "desc")
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});

exports.articles = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("articles");
  db.orderBy("lastupdate", "desc")
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});

exports.events = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("events");
  db.orderBy("lastupdate", "desc")
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});

exports.social_videos = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("social_videos");
  db.orderBy("lastupdate", "desc")
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});

exports.homepage_social_videos = functions.region("europe-west2").https.onRequest(
    (_request, response) => {
      const db = firebaseAdmin.firestore().collection("social_videos");
      db.orderBy("lastupdate", "desc")
          .limit(4)
          .get()
          .then((snap) => {
            const res = [];
            snap.forEach((doc) => {
              res.push(doc.data());
            });
            response.json(res);
          })
          .catch((err) => {
            console.log(err);
            response.json([]);
          });
    }
);

exports.homepage_articles = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("articles");
  db.orderBy("lastupdate", "desc")
      .limit(4)
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});

exports.homepage_events = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("events");
  db.orderBy("lastupdate", "desc")
      .limit(4)
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});

exports.get_new_by_id = functions.region("europe-west2").https.onRequest((request, response) => {
  console.log(request.body);
  const db = firebaseAdmin.firestore().collection("articles").doc(request.body.id);
  db.get().then((doc) => {
    if (doc.exists) {
      response.json(doc.data());
    } else {
      response.sendStatus(404);
    }
  }).catch((err) => {
    console.log(err);
    response.sendStatus(404);
  });
});

exports.events = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("events");
  db.orderBy("lastupdate", "desc")
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});

exports.rankings = functions.region("europe-west2").https.onRequest((_request, response) => {
  const db = firebaseAdmin.firestore().collection("rankings");
  db.orderBy("lastupdate", "desc")
      .get()
      .then((snap) => {
        const res = [];
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        response.json(res);
      })
      .catch((err) => {
        console.log(err);
        response.json([]);
      });
});
