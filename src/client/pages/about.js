import React from "react";
import App from "../components/App";
import withAuth from "../components/withAuth";

const About = () => (
  <App>
    <p>Next.js About Page</p>
  </App>
);

export default withAuth(About);
