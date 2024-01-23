import React, { useEffect, useState } from "react";

export default function Table() {
  const [books, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/books")
      .then((response) => response.json())
      .then((books) => setBook(books))
      .catch((error) => console.error("Error while fetching books:", error));
  }, []);

  const formatCreatedAt = (createdAt) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return new Date(createdAt).toLocaleString("en-US", options);
  };

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    #
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Book Title
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Author
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Stock Quantity
                  </th>
                  <th>Creation Date</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr
                    key={book.id}
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                  >
                    <td class="whitespace-nowrap px-6 py-4">{book.ID}</td>
                    <td class="whitespace-nowrap px-6 py-4">{book.title}</td>
                    <td class="whitespace-nowrap px-6 py-4">{book.author}</td>
                    <td class="whitespace-nowrap px-6 py-4">{book.price}</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {book.stockQuantity}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {formatCreatedAt(book.CreatedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
