import React, { useState } from "react";

import doctor2 from "../Images/doctor.jpg";
import prev from "../Images/prev.png";
import next from "../Images/next.png";

const IntroDoctors = () => {
  const [docIndex, setdocIndex] = useState(0);

  let doctors = [
    {
      img: doctor2,
      says: '"Medicine is not only a science, but also the art of letting our own individuality interact with the individuality of the patient."',
    },
    {
      img: doctor2,
      says: '"The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease."',
    },
    {
      img: doctor2,
      says: '"The physician\'s highest calling, his only calling, is to make sick people healthy - to heal, as it is termed."',
    },
  ];

  const nextD = () => {
    let newdocIndex;
    let doctorsS = document.getElementById("doctorsS");
    if (docIndex !== 2) {
      newdocIndex = docIndex + 1;
      setdocIndex(newdocIndex);
      let toTranslate = -33.33 * newdocIndex;
      doctorsS.style.transform = `translateX(${toTranslate}%)`;
    }
  };
  const prevD = () => {
    let newdocIndex;
    let doctorsS = document.getElementById("doctorsS");
    if (docIndex !== 0) {
      newdocIndex = docIndex - 1;
      setdocIndex(newdocIndex);
      let toTranslate = -33.33 * newdocIndex;
      doctorsS.style.transform = `translateX(${toTranslate}%)`;
    }
  };
  return (
    <div id={"doctors"} className="bg-blue-600 md:py-28 md:px-15 p-5 relative">
      <img
        id="prev"
        className="absolute top-1/2 -translate-y-1/2 left-3 h-6 md:h-12 cursor-pointer invert hover:scale-125 transition-all duration-300"
        src={prev}
        alt="prev"
        onClick={prevD}
      ></img>
      <div className="w-full overflow-hidden box-border">
        <div className="w-3full flex transition-all duration-500" id="doctorsS">
          {doctors.map((doctor) => {
            return (
              <div
                id={doctors.indexOf(doctor).toString()}
                key={doctors.indexOf(doctor)}
                className="w-full text-center space-y-3"
              >
                <img
                  src={doctor.img}
                  alt="doctor"
                  className="h-52 mx-auto rounded-full"
                ></img>
                <p className="text-white text-lg md:text-2xl lg:px-48 md:px-20 p-10">
                  {doctor.says}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <img
        id="next"
        className="absolute top-1/2 -translate-y-1/2 right-3 h-6 md:h-12 cursor-pointer invert hover:scale-125 transition-all duration-300"
        src={next}
        onClick={nextD}
        alt="next"
      ></img>
    </div>
  );
};

export default IntroDoctors;
