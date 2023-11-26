import React, { useState } from "react";

const BookDropDown = ({ onAddBookClick }) => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 top-full z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
    >
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex="-1"
        onClick={onAddBookClick}
      >
        Add a Book
      </a>

      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex="-1"
      >
        Show all Orders
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-red-700"
        role="menuitem"
        tabIndex="-1"
      >
        Test
      </a>
    </div>
  );
};

export default BookDropDown;
