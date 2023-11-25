import React from "react";

const BookDropDown = () => {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
    </div>
  );
};

export default BookDropDown;
