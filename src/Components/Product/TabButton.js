import React from "react";

const TabButton = ({ onSelect, children }) => {
  return (
    <button
      onClick={onSelect}
      className="bg-purple-200 hover:bg-purple-400 text-gray-600 py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default TabButton;
