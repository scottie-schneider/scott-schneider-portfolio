const admin = require("firebase-admin");
const functions = require("firebase-functions");

module.exports = {
  getPost: async (data, context) => {
    const { postSlug } = data;
    let posts = [];

    try {
      const postRef = admin
        .firestore()
        .collection("fl_content")
        .where("_fl_meta_.schema", "==", "blogPost")
        .where("slug", "==", postSlug);

      await postRef
        .limit(1)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("no matching documents");
            return;
          }
          snapshot.forEach(doc => {
            posts.push(doc.data());
          });
        });
      return posts;
    } catch (e) {
      console.log(e);
      return;
    }
  }
};
