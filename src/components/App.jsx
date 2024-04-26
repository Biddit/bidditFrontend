import React from "react";
import Footer from "./common/Footer";
import Header2 from "./page/homepage2/Header2";

function Layout({ children }) {
  return (
    <>
      <Header2 />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
