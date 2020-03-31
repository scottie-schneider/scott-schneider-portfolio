import * as admin from "firebase-admin";
const { https, pubsub } = require("firebase-functions");
import next from "next";

admin.initializeApp();

// callable functions
const c = require("./callable");
exports.callGetPost = https.onCall(c.posts.getPost);

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: { distDir: "dist/client" }
});
const handle = app.getRequestHandler();

const server = https.onRequest((request, response) => {
  // log the page.js file or resource being requested
  console.log("File: " + request.originalUrl);
  return app.prepare().then(() => handle(request, response));
});

const nextjs = {
  server
};

export { nextjs };
