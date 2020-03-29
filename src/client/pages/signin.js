import React, { useContext } from "react";
import App from "../components/App";
import { FirebaseContext } from "./_app";
import router from "next/router";

export default () => {
  const { firebase, auth } = useContext(FirebaseContext);
  const authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    auth
      .signInWithPopup(authProvider)
      .then(() => router.push("/"))
      .catch(err => console.log(err));
  };
  return (
    <App>
      <button onClick={() => authenticate("Google")}>
        Sign in with Google
      </button>
    </App>
  );
};
