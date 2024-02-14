import React, { useState } from "react";
import { FormInput, FormButton } from "./FormComponents";

const AddGradeForm = ({ onClose }) => {
  const [studentsOptions, setStudentOptions] = useState([
    { label: "Select an Student", value: "" },
  ]);

  const fetchStudents = () => {
    fetch("http://localhost:8080/api/v1/student")
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((student) => ({
          label: student.name,
          value: student.id,
        }));
        setStudentOptions([
          { label: "Select an Student", value: "" },
          ...options,
        ]);
      })
      .catch((error) => console.error("Error fetching students:", error));
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
      <div className="bg-white p-10 rounded-md shadow-md">
        <form className="max-w-md mx-auto">
          <FormInput name="grades" label="Grades" type="text" />
          <FormInput
            name="instructor"
            label="Select Instructor"
            type="select"
            options={studentsOptions}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <FormButton onClick={handleCancel}>Cancel</FormButton>
        </form>
      </div>
    </div>
  );
};

export default AddGradeForm;
