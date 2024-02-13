import React, { useEffect, useState } from "react";

export default function Table() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/instructor")
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) =>
        console.error("Error while fetching instructors:", error)
      );
  }, []);

  return (
    <div className="flex justify-center">
      {" "}
      {/* Center horizontally */}
      <div className="w-1/2">
        {" "}
        {/* Set width to 50% */}
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
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {instructors.map((instructor) => (
                    <tr
                      key={instructor.id}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        {instructor.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {instructor.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {instructor.surname}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {instructor.active}
                      </td>
                    </tr>
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
