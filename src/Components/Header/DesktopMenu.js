// DesktopMenu.js
import React, { useState } from "react";
import AddBookForm from "./AddStudentForm";
import AddGradeForm from "./AddGradeForm";

const DesktopMenu = () => {
  const [isStudentFormOpen, setAddStudentFormOpen] = useState(false);

  const [isAddGradeModalOpen, setAddGradeModalOpen] = useState(false);

  const toggleAddStudentForm = () => {
    setAddStudentFormOpen((isAddStudentFormOpen) => !isAddStudentFormOpen);
  };

  const closeAddStudentForm = () => {
    setAddStudentFormOpen(false);
  };

  const toggleAddGradeModalOpen = () => {
    setAddGradeModalOpen((isAddGradeModalOpen) => !isAddGradeModalOpen);
  };
  const closeAddGradeModalOpen = () => {
    setAddGradeModalOpen(false);
  };

  return (
    <div className="flex">
      <button
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        aria-haspopup="true"
        onClick={toggleAddGradeModalOpen}
      >
        Add a Grade
      </button>
      <button
        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        aria-haspopup="true"
        onClick={toggleAddStudentForm}
      >
        Add a Student
      </button>
      {isStudentFormOpen && <AddBookForm onClose={closeAddStudentForm} />}
      {isAddGradeModalOpen && <AddGradeForm onClose={closeAddGradeModalOpen} />}
    </div>
  );
};

export default DesktopMenu;
