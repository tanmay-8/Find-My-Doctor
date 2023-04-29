import React, { useEffect, useState } from "react";
import location from "../Images/location.png";

const SelectCity = () => {
  const [city, setCity] = useState("");
  const [place, setPlace] = useState(localStorage.getItem("Health-place"));

  const openChange = () => {
    document.getElementById("change").style.transform = "translateY(170%)";
    document.getElementById("change").classList.toggle("hidden");
    document.getElementById("city").classList.toggle("hidden");
  };

  const closeChange = () => {
    let alert = document.getElementById("alert");
    alert.innerHTML = "";
    document.getElementById("change").style.transform = "translateY(0%)";
    document.getElementById("change").classList.toggle("hidden");
    document.getElementById("city").classList.toggle("hidden");
  };

  const chnageCity = async () => {
    let alert = document.getElementById("alert");
    if (city.length < 3 || city === null || city === undefined) {
      alert.innerHTML = "Enter valid city";
    } else {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/updateCity",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("Health-token"),
            },
            body: JSON.stringify({ city: city.toUpperCase() }),
          }
        );

        const json = await response.json();
        console.log(json);
        if (json.success) {
          closeChange();
          localStorage.setItem(
            "Health-place",city[0].toUpperCase()+city.slice(1).toLowerCase()
          );
          setPlace(city[0].toUpperCase()+city.slice(1).toLowerCase());
        } else {
          alert.innerHTML = json.error;
        }
      } catch {
        alert.innerHTML = "Internal server error.";
      }
    }
  };

  useEffect(() => {
    // setPlace(localStorage.getItem("Health-place"));
  }, [place]);

  return (
    <div>
      <div
        id="city"
        onClick={openChange}
        className=" flex space-x-1 cursor-pointer hover:scale-110 transition-all items-center text-xl text-blue-700"
      >
        <img src={location} alt="location" className="h-10"></img>
        <span>{place}</span>
      </div>
      <div
        id="change"
        className="h-40 w-88 bg-blue-600 border -mr-5 rounded-bl-lg -mt-72 transition-all hidden animate-spread-out animate-shrink-in shadow-xl p-5 space-y-3"
      >
        <input
          id="cityInput"
          className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none rounded-lg"
          type={"text"}
          name={"city"}
          placeholder={"City"}
          spellCheck={"false"}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          // onChange={onChang}
        ></input>
        <div className="w-full flex space-x-4">
          <button
            className="text-lg px-4 py-2 text-white shadow-lg rounded-lg bg-green-500 w-1/2 hover:scale-105"
            onClick={chnageCity}
          >
            Change
          </button>
          <button
            className="text-lg px-4 py-2 text-white shadow-lg rounded-lg bg-red-500 w-1/2 hover:scale-105"
            onClick={closeChange}
          >
            Cancel
          </button>
        </div>
        <p id="alert" className=" h-5 text-red-600 text-center"></p>
      </div>
    </div>
  );
};

export default SelectCity;
