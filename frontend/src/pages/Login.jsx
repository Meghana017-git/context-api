import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { User, setUser } = useContext(UserContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setUser(value);
    navigate("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 shadow-md rounded-lg"
      >
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-red-700 text-center mb-6">
          Login
        </h2>

        {/* Username Field */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Enter your username"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
