import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
    
  const nevigate = useNavigate();

  // getting user detail
  const [user, setUser] = useState({
    name: localStorage.getItem("Health-name"),
    email: localStorage.getItem("Health-email"),
    city: localStorage.getItem("Health-place"),
    phoneNumber: localStorage.getItem("Health-phone"),
    password: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // updating user details
  const update = async (e) => {
    let alert = document.getElementById("alert");
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/user/updateUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("Health-token")
        },
        body: JSON.stringify(user),
      });

      const json = await response.json();

      console.log(json)

      if (json.success) {
        localStorage.setItem(
          "Health-place",
        user.city[0].toUpperCase() +user.city.slice(1).toLowerCase()
        );
        localStorage.setItem("Health-name",user.name);
        localStorage.setItem("Health-email",user.email);
        localStorage.setItem("Health-phone",user.phoneNumber);

        nevigate("/");
      } else {
        alert.innerHTML = json.error;
      }
    } catch(error){
      console.log(error)
      alert.innerHTML = "Internal server error.";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative bg-blue-600 p-8">
          <div className="w-16 h-16 text-xl bg-white text-blue-600 font-bold rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          </div>
        </div>
        <div className="px-6 py-8">
          <form onSubmit={update}>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                required={true}
                minLength={5}
                maxLength={20}
                value={user.name}
                onChange={onChange}
                className="w-full bg-gray-100 text-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                required={true}
                onChange={onChange}
                className="w-full bg-gray-100 text-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                Phone:
              </label>
              <input
                type="number"
                name="phoneNumber"
                value={user.phoneNumber}
                required={true}
                minLength={10}
                maxLength={10}
                onChange={onChange}
                className="w-full bg-gray-100 text-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                City:
              </label>
              <input
                type="text"
                name="city"
                value={user.city}
                required={true}
                minLength={3}
                onChange={onChange}
                className="w-full bg-gray-100 text-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                required={true}
                onChange={onChange}
                className="w-full bg-gray-100 text-gray-800 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
                
              <p
                className="h-5 text-sm text-gray-600 text-center"
              >Should type password</p>
            </div>
            <div>
              <p
                id="alert"
                className="h-5 text-sm text-red-600 text-center"
              ></p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
