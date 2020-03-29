import React, { useContext } from "react";
import { FirebaseContext } from "../_app";
import { useRouter } from "next/router";
import db from "../../lib/db";

const Post = ({ post }) => {
  const router = useRouter();
  const { firestore } = useContext(FirebaseContext);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
Post.getInitialProps = async ({ query }) => {
  const firebase = db(true);
  const blogPost = [];
  try {
    await firebase
      .firestore()
      .collection("fl_content")
      .where("_fl_meta_.schema", "==", "blogPost")
      .where("slug", "==", query.slug)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return { post: "empty" };
        }
        blogPost.push(snapshot.docs[0].data());
      });
  } catch (e) {
    return { post: e.message };
  }
  return { post: blogPost[0] };
};

export default Post;
