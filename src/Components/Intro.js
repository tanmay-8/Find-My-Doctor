import React from "react";
import IntroTop from "./IntroTop";
import IntroFeatures from "./IntroFeatures";
import IntroDoctors from "./IntroDoctors";
import Footer from "./Footer";

const Intro = () => {


  return (
    <div id="main" className="">
      <IntroTop/>
      <IntroFeatures/>
      <IntroDoctors/>
      {/* How to use */}
      <div
        id={"about"}
        className="py-10 px-2  md:py-32 md:justify-center md:flex"
      >
        <div className="h-48 w-48 rounded-full bg-green-600 mx-auto md:mx-0 items-center flex text-center text-2xl text-white font-medium p-2 hover:scale-125 hover:shadow-2xl transition-all duration-300">
          Register or login
        </div>
        <div className="w-1 h-28 bg-green-600 lg:w-1/4 md:w-1/5 md:h-1 my-auto mx-auto md:mx-0"></div>
        <div className="h-48 w-48 rounded-full bg-green-600 mx-auto md:mx-0 items-center flex text-center text-2xl text-white font-medium hover:scale-125 hover:shadow-2xl transition-all duration-300">
          Search for doctor
        </div>
        <div className="w-1 h-28 bg-green-600 lg:w-1/4 md:w-1/5 md:h-1 my-auto mx-auto md:mx-0"></div>
        <div className="h-48 w-48 rounded-full bg-green-600 mx-auto md:mx-0 items-center flex text-center text-2xl text-white font-medium hover:scale-125 hover:shadow-2xl transition-all duration-300">
          Book appointment
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Intro;
