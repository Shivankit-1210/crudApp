import React, { useEffect, useState } from "react";

const Create = ({ data, update, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //This function Handles the user creation and updation part
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); 
    }
    setFormData({ id: "", firstName: "", lastName: "", age: "" }); 
  };

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id || "",
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        age: data.age || "",
        comment:""
      });
    }
  }, [data]);

  return (
    <div className=" w-[80%]  flex mx-auto my-auto">

      {/* Form for creating and updating the details of employee */}
      <form
        className="w-full flex  shadow-lg rounded-xl p-6 border bg-blue-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-700 ">Employee Form</h2>

        {/* Employee id input*/}
        <div className="flex flex-col m-2">
          <label className="text-sm font-medium text-gray-600 mb-1">Employee ID</label>
          <input
          required
            className="px-3 py-2 border border-gray-300 rounded-md  bg-pink-50"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            disabled={update}
          />
        </div>

        {/* employee firstName input */}
        <div className="flex flex-col m-2">
          <label className="text-sm font-medium text-gray-600 mb-1">First Name</label>
          <input
          required
            className="px-3 py-2 border border-gray-300 rounded-md  bg-pink-50"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        {/* employee lastName input */}
        <div className="flex flex-col m-2">
          <label className="text-sm font-medium text-gray-600 mb-1">Last Name</label>
          <input
          required
            className="px-3 py-2 border border-gray-300 rounded-md  bg-pink-50"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
         {/* employee age input */}
        <div className="flex flex-col m-2">
          <label className="text-sm font-medium text-gray-600 mb-1">Age</label>
          <input
          required
            className="px-3 py-2 border border-gray-300 rounded-md bg-pink-50"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* Buttons for submit and update */}
        <div className="pt-4 flex my-auto mx-auto">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded-lg cursor-pointer"
          >
            {update ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

