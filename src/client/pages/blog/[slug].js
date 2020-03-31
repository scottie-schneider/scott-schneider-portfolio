import React, { useContext, useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { FirebaseContext } from "../_app";
import { useRouter } from "next/router";
import db from "../../lib/db";

const Post = () => {
  const firebase = useContext(FirebaseContext);
  const getPost = async slug => {
    const post = firebase.firebase.functions().httpsCallable("callGetPost");
    post({ postSlug: "this-is-the-second-blog-post" }).then(data => {
      console.log(data);
    });
  };
  useEffect(() => {
    getPost();
  }, []);

  return <div>"hi"</div>;
};

export default Post;
