// DesktopMenu.js
import React, { useState } from "react";
import NavLink from "./Navlink";
import AddBookForm from "./AddStudentForm";

const DesktopMenu = ({}) => {
  const [isStudentFormOpen, setAddStudentFormOpen] = useState(false);

  const toggleAddStudentForm = () => {
    setAddStudentFormOpen((isAddStudentFormOpen) => !isAddStudentFormOpen);
  };

  const closeAddStudentForm = () => {
    setAddStudentFormOpen(false);
  };

  return (
    <div className="flex">
      <NavLink href="#" label="Instructor Operations" />
      <button
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        aria-haspopup="true"
        onClick={toggleAddStudentForm}
      >
        Add a Student
      </button>
      {isStudentFormOpen && <AddBookForm onClose={closeAddStudentForm} />}
    </div>
  );
};

export default DesktopMenu;
