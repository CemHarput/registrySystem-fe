import React, { useEffect, useState } from "react";
import { FormInput, FormButton } from "./FormComponents";

const AddStudentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    student_name: "",
    student_surname: "",
    grades: "",
    instructor: "",
  });

  const [instructorOptions, setInstructorOptions] = useState([
    { label: "Select an Instructor", value: "" },
  ]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = () => {
    fetch("http://localhost:8080/api/v1/instructor")
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((instructor) => ({
          label: instructor.name,
          value: instructor.id,
        }));
        setInstructorOptions([
          { label: "Select an Instructor", value: "" },
          ...options,
        ]);
      })
      .catch((error) => console.error("Error fetching instructors:", error));
  };
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { student_name, student_surname, grades, instructor } = formData;
      const addGradeRequestDtoList = grades
        .split(",")
        .map((value) => ({ value: parseFloat(value.trim()) }));

      const requestBody = {
        name: student_name,
        surname: student_surname,
        addGradeRequestDtoList: addGradeRequestDtoList,
        instructorId: instructor,
      };

      const response = await fetch("http://localhost:8080/api/v1/addStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        console.log("Student added successfully!");
        onClose();
      } else {
        console.error("Failed to add student:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding student:", error.message);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
      <div className="bg-white p-10 rounded-md shadow-md">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <FormInput
            name="student_name"
            label="Name"
            value={formData.student_name}
            onChange={handleChange}
          />
          <FormInput
            name="student_surname"
            label="Surname"
            value={formData.student_surname}
            onChange={handleChange}
          />
          <FormInput
            name="grades"
            label="Grades"
            type="text"
            value={formData.grades}
            onChange={handleChange}
          />
          <FormInput
            name="instructor"
            label="Select Instructor"
            type="select"
            options={instructorOptions}
            value={formData.instructor}
            onChange={(name, value) => handleChange(name, value)}
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

export default AddStudentForm;
