import React from "react";

const Tabs = ({ children }) => {
  return (
    <>
      <div className="flex justify-center flex-row space-x-4">{children}</div>
    </>
  );
};

export default Tabs;
