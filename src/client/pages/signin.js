import React, { useContext, useEffect, useState } from "react";
import App from "../components/App";
import { FirebaseContext } from "./_app";
import router from "next/router";

export default () => {
  const { firebase, auth } = useContext(FirebaseContext);
  const [status, setStatus] = useState("LOADING");
  const authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    auth
      .signInWithPopup(authProvider)
      .then(() => router.push("/"))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        setStatus("SIGNED_IN");
      } else {
        router.push("/signin");
      }
    });
  }, []);
  return (
    <App>
      {status !== "SIGNED_IN" ? (
        <button onClick={() => authenticate("Google")}>
          Sign in with Google
        </button>
      ) : (
        "Signed in :)"
      )}
    </App>
  );
};
