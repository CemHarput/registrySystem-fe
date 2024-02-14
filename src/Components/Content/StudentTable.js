import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/student")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) =>
        console.error("Error while fetching instructors:", error)
      );
  }, []);

  const handleDelete = async (studentId, gradeId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/student/${studentId}/grades/${gradeId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setStudents((prevStudents) => {
          const updatedStudents = prevStudents.map((student) => {
            if (student.id === studentId) {
              student.grades = student.grades.filter(
                (grade) => grade.id !== gradeId
              );
            }
            return student;
          });
          return updatedStudents;
        });
      } else {
        console.error("Failed to delete grade:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting grade:", error.message);
    }
  };

  const [editableGrade, setEditableGrade] = useState(null);

  const handleEdit = (studentId, gradeId) => {
    setEditableGrade({ studentId, gradeId });
  };

  const handleSave = async (studentId, gradeId, newValue) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/student/${studentId}/grades/${gradeId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ value: newValue }),
        }
      );
      if (response.ok) {
        console.log("Grade updated successfully");
        setEditableGrade(null);
      } else {
        console.error("Failed to update grade:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating grade:", error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Surname
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Instructor
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Grades
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Operation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <React.Fragment key={student.id}>
                      {student.grades.map((grade, index) => (
                        <tr
                          key={`${student.id}_${index}`}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            {student.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {student.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {student.surname}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {student.instructorName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {editableGrade &&
                            editableGrade.studentId === student.id &&
                            editableGrade.gradeId === grade.id ? (
                              <input
                                type="text"
                                value={grade.value}
                                onChange={(e) => {
                                  const newValue = e.target.value;
                                  setStudents((prevStudents) =>
                                    prevStudents.map((prevStudent) => {
                                      if (prevStudent.id === student.id) {
                                        prevStudent.grades =
                                          prevStudent.grades.map((prevGrade) =>
                                            prevGrade.id === grade.id
                                              ? {
                                                  ...prevGrade,
                                                  value: newValue,
                                                }
                                              : prevGrade
                                          );
                                      }
                                      return prevStudent;
                                    })
                                  );
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleSave(
                                      student.id,
                                      grade.id,
                                      e.target.value
                                    );
                                  }
                                }}
                              />
                            ) : (
                              <span>{grade.value}</span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex items-center">
                              <PencilSquareIcon
                                className="h-6 w-6 text-blue-500 mr-2 hover:text-blue-700 cursor-pointer"
                                onClick={() => handleEdit(student.id, grade.id)}
                              />
                              <TrashIcon
                                className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer"
                                onClick={() =>
                                  handleDelete(student.id, grade.id)
                                }
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
