import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../pages/_app";
import router from "next/router";

const Wrapper = ({ children }) => {
  return <div>{children}</div>;
};

export default Wrapper;
