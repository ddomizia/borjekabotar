import React from "react";
import "./Map.scss";
import Header from "../components/Header";



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
