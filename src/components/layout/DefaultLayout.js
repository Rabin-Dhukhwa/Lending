import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header goes here */}
      <Header />
      <div className="main">{children}</div>
      {/* footer goes here */}
      <Footer />
    </div>
  );
};
