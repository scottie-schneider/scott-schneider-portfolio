import React, { useContext, useState } from "react";
import fetch from "isomorphic-unfetch";
import { FirebaseContext } from "../_app";
import { useRouter } from "next/router";
import db from "../../lib/db";

const Post = ({ data }) => {
  return <div>{data.title}</div>;
};
Post.getInitialProps = async ({ query }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  return { data };
};

export default Post;
