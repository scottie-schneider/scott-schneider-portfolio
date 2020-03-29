// Initialize Firebase
const firebase = require("firebase/app");

const db = url => {
  // switch or if statement chain to set config variables based on url
  // config can be empty, or connect to the default db
  let config = {};
  if (true) {
    config = {
      apiKey: process.env.FIREBASE_API_KEY_T,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN_T,
      databaseURL: process.env.FIREBASE_DATABASE_URL_T,
      projectId: process.env.FIREBASE_PROJECT_ID_T,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET_T,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_T,
      appId: process.env.FIREBASE_APP_ID_T,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID_T
    };
  }
  try {
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }
  return firebase;
};
export default db;
