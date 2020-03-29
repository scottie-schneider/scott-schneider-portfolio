import React, { useState, useContext, useEffect } from "react";
import Header from "./Header";

const App = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default App;
