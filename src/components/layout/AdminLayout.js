import React from "react";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header goes here */}
      <div className="main">{children}</div>
      {/* footer goes here */}
    </div>
  );
};
