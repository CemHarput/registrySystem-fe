// DesktopMenu.js
import React, { useState } from "react";
import NavLink from "./Navlink";
import BookDropDown from "./BookDropDown";
import AddBookForm from "./AddBookForm";

const DesktopMenu = ({ toggleBookMenu, isBookMenuOpen }) => {
  const [isAddBookFormOpen, setAddBookFormOpen] = useState(false);

  const toggleAddBookForm = () => {
    setAddBookFormOpen((isAddBookFormOpen) => !isAddBookFormOpen);
  };
  const closeAddBookForm = () => {
    setAddBookFormOpen(false);
  };

  return (
    <div className="flex">
      <NavLink href="#" label="Dashboard" />
      <button
        onClick={toggleBookMenu}
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        aria-haspopup="true"
        aria-expanded={isBookMenuOpen}
      >
        Book Operations
      </button>
      {isBookMenuOpen && <BookDropDown onAddBookClick={toggleAddBookForm} />}
      <NavLink href="#" label="Projects" />
      <NavLink href="#" label="Calendar" />

      {isAddBookFormOpen && <AddBookForm onClose={closeAddBookForm} />}
    </div>
  );
};

export default DesktopMenu;
