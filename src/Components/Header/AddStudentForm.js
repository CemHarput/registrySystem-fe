import React from "react";

const FormInput = ({ name, label, type = "text", required = true }) => (
  <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      name={name}
      id={name}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required={required}
    />
    <label
      htmlFor={name}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

const FormButton = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ml-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {children}
  </button>
);

const AddStudentForm = ({ onClose }) => {
  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
      <div className="bg-white p-10 rounded-md shadow-md">
        <form className="max-w-md mx-auto">
          <FormInput name="floating_book_title" label="Book Title" />
          <FormInput name="floating_author" label="Author" />
          <FormInput
            name="price_of_book"
            label="Price"
            type="number"
            step="any"
          />
          <FormInput name="book_quantity" label="Quantity" type="number" />
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
