import React from "react";

import search from "../Images/searchDoc.png";
import secure from "../Images/secure.png";
import book from "../Images/book.png";

const IntroFeatures = () => {
  return (
    <div
      id="features"
      className=" py-10 md:py-32 space-y-10 md:space-y-0 md:flex md:space-x-5 lg:px-20 md:px-10 md:justify-around text-xl"
    >
      <div className="md:w-1/4 text-center p-5 space-y-5 mx-auto md:mx-0 hover:scale-125 hover:shadow-lg transition-all duration-300 md:border-2 rounded-xl">
        <img
          src={search}
          alt={"icon"}
          className="h-28 rounded-full bg-white mx-auto"
        ></img>
        <p className="py-5 px-12 md:px-0">
          Search for specialized doctors according to your need.
        </p>
      </div>
      <div className="md:w-1/4 text-center p-5 space-y-5 mx-auto md:mx-0 hover:scale-125 hover:shadow-lg transition-all duration-300 md:border-2 rounded-xl">
        <img src={book} alt={"icon"} className="h-28 mx-auto"></img>
        <p className="py-5 px-12 md:px-0">
          Book appointments online with ease from anywhere.
        </p>
      </div>
      <div className="md:w-1/4 text-center p-5 space-y-5 mx-auto md:mx-0 hover:scale-125 hover:shadow-lg transition-all duration-300 md:border-2 rounded-xl">
        <img src={secure} alt={"icon"} className="h-28 mx-auto"></img>
        <p className="py-5 px-12 md:px-0">
          Safe, secure and trusted by many, you can bet on us.
        </p>
      </div>
    </div>
  );
};

export default IntroFeatures;
