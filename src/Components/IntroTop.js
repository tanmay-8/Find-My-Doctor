import React from "react";
import Logo from "../Images/logo.png";
import doctor from "../Images/doctor.png";

import { useNavigate } from "react-router-dom";

const IntroTop = () => {
    
  const nevigate = useNavigate();
  const style1 = {
    wordSpacing: "5px",
  };

  const scrollDiv = (index) => {
    let features = document.getElementById("features");
    let doctors = document.getElementById("doctors");
    let about = document.getElementById("about");
    if (index === 0) {
      features.scrollIntoView({ behavior: "smooth" });
    } else if (index === 1) {
      doctors.scrollIntoView({ behavior: "smooth" });
    } else {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="w-full p-6 h-fit bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 md:px-20 lg:px-32 md:pt-16  text-white ">
      <div className="md:flex items-center justify-between mb-4">
        <div className="w-fit space-x-4 flex items-center font-semibold transition-all duration-400 mx-auto md:mx-0 border-2 shadow-2xl p-2 hover:scale-110 rounded-lg">
          <img
            src={Logo}
            alt={"logo"}
            className="h-11 invert cursor-pointer transition-all"
          ></img>
          <p className="cursor-pointer transition-all text-3xl md:text-4xl ">
            Find My Doctor
          </p>
        </div>
        <div className=" hidden md:flex md:space-x-6 lg:space-x-8 text-xl items-center">
          <div
            className="cursor-pointer hover:text-2xl duration-400 transition-all"
            onClick={() => scrollDiv(0)}
          >
            Features
          </div>
          <div
            className="cursor-pointer hover:text-2xl duration-400 transition-all"
            onClick={() => scrollDiv(1)}
          >
            Doctors
          </div>
          <div
            className="cursor-pointer hover:text-2xl duration-400 transition-all"
            onClick={() => scrollDiv(2)}
          >
            How to use ?
          </div>
        </div>
      </div>
      <div className="md:flex w-full md:h-full">
        <div
          className="md:w-1/2 md:pt-28 h-full py-10 px-5 font-bold text-2xl md:text-3xl lg:text-4xl text-center uppercase md:text-left"
          style={style1}
        >
          <p className="transition-all duration-300">
            Get the <br></br>Treatment You Need, Search for Specialized Doctors
            and Book Appointments Online.
          </p>
          <button
            className="bg-white text-blue-600  mt-5 px-10 py-2 shadow-lg rounded-lg  text-2xl hover:scale-125 transition-all"
            onClick={() => nevigate("/Signin")}
          >
            Log In
          </button>
        </div>
        <div className="md:w-1/2 md:relative -mb-6">
          <img
            src={doctor}
            alt={"doctor"}
            className="md:h-full md:absolute md:right-0"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default IntroTop;
