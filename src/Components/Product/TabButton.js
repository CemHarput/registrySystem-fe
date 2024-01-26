import React from "react";

const TabButton = ({ onSelect, isSelected, children }) => {
  return (
    <button
      onClick={onSelect}
      className={`py-2 px-4 rounded ${
        isSelected
          ? "bg-purple-400 text-white"
          : "bg-purple-200 hover:bg-purple-400 text-gray-600"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
