import React, { useContext, useEffect, useState } from "react";
import App from "../components/App";
import { FirebaseContext } from "./_app";
import withAuth from "../components/withAuth";
// following two lines for getInitialProps.
import absoluteUrl from "next-absolute-url";
import db from "../lib/db";
import router from "next/router";
const Home = ({ messages }) => {
  const { firestore, auth } = useContext(FirebaseContext);
  const [leadMessages, setLeadMessages] = useState(messages);
  const logout = () => {
    auth.signOut().then(() => router.push("/signin"));
  };
  const fetchMessages = async () => {
    const messages = [];
    try {
      await firestore
        .collection("messages")
        .where("userId", "==", 1)
        .where("leadId", "==", 1)
        .get()
        .then(documentSet => {
          if (documentSet !== null) {
            documentSet.forEach(doc => {
              messages.push({
                id: doc.id,
                ...doc.data()
              });
            });
            setLeadMessages(messages);
          }
          return messages;
        });
    } catch (err) {
      console.log("allen we had an error");
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("hi");
    fetchMessages();
    const unsubscribe = firestore
      .collection("messages")
      .onSnapshot(fetchMessages);
    // handles the cleanup
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <App>
      <p>Next.js Index Page</p>
      <button onClick={logout}>Logout</button>
      {leadMessages.map(message => (
        <p>{message.message}</p>
      ))}
    </App>
  );
};
Home.getInitialProps = async ({ req }) => {
  const absolute = absoluteUrl(req);
  let messages = [];
  const firebase = db(absolute.host);

  await firebase
    .firestore()
    .collection("messages")
    .where("userId", "==", 1)
    .where("leadId", "==", 1)
    .get()
    .then(documentSet => {
      if (documentSet !== null) {
        documentSet.forEach(doc => {
          messages.push({
            id: doc.id,
            ...doc.data()
          });
        });
      }
    });
  return { messages };
};

export default withAuth(Home);
