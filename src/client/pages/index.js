import React, { useContext, useEffect, useState } from "react";
import App from "../components/App";
import { FirebaseContext } from "./_app";
import withAuth from "../components/withAuth";
// following two lines for getInitialProps.
import absoluteUrl from "next-absolute-url";
import db from "../lib/db";
import router from "next/router";

import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/blog/[title]" as={`/blog/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Home = ({ messages }) => {
  const { firestore, auth } = useContext(FirebaseContext);
  const [blogs, setBlogs] = useState(messages);
  const logout = () => {
    auth.signOut().then(() => router.push("/signin"));
  };
  const fetchBlogs = async () => {
    const blogPosts = [];
    try {
      await firestore
        .collection("fl_content")
        .where("_fl_meta_.schema", "==", "blogPost")
        .get()
        .then(documentSet => {
          if (documentSet !== null) {
            documentSet.forEach(doc => {
              blogPosts.push({
                id: doc.id,
                ...doc.data()
              });
            });
            setBlogs(blogPosts);
          }
          return blogPosts;
        });
    } catch (err) {
      console.log("allen we had an error");
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBlogs();
    const unsubscribe = firestore
      .collection("fl_content")
      .onSnapshot(fetchBlogs);
    // handles the cleanup
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <App>
      <p>Next.js Index Page</p>
      <button onClick={logout}>Logout</button>
      {blogs && blogs.map(b => <PostLink title={b.title} />)}
    </App>
  );
};

export default Home;
