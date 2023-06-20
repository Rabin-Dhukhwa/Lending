import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-secondary text-light p-5 text-center ">
      &copy; {currentYear} Rabin Dhukhwa. All rights reserved.
    </div>
  );
};
