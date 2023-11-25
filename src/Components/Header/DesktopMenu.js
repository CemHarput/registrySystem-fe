// DesktopMenu.js
import React from "react";
import NavLink from "./Navlink";
import BookDropDown from "./BookDropDown";

const DesktopMenu = ({ toggleBookMenu, IsBookMenuOpen }) => {
  return (
    <div className="flex space-x-4">
      <NavLink href="#" label="Dashboard" />
      <button
        onClick={toggleBookMenu}
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        aria-haspopup="true"
        aria-expanded={IsBookMenuOpen}
      >
        Book Operations
      </button>
      {IsBookMenuOpen && <BookDropDown />}
      <NavLink href="#" label="Projects" />
      <NavLink href="#" label="Calendar" />
    </div>
  );
};

export default DesktopMenu;
