import React from "react";
import doctorImg from "../Images/doctor.jpg";
import Rating from "react-rating";
import starFull from "../Images/starFull.png";
import starEmpty from "../Images/starEmpty.png";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="shadow-xl border cursor-pointer rounded-2xl transition-all  border-blue-700">
      <div className="flex rounded-t-2xl p-2 space-x-3">
        <img
          className="h-40 md:h-48 rounded-tl-2xl"
          src={doctorImg}
          alt="Doctor"
        ></img>
        <div className="space-y-2">
          <div>
            <button className="bg-green-600 text-sm md:text-base text-white py-2 px-2 shadow-lg transition-all hover:scale-105 rounded-lg">
              Book Appointmnet
            </button>
          </div>
          <div className="text-sm md:text-base">
            {doctor.qualifications.join(", ")}
          </div>
          <div className="h-fit">
            <Rating
              fractions={5}
              readonly={true}
              initialRating={parseInt(doctor.rating.$numberDecimal)}
              fullSymbol={
                <span>
                  <img src={starFull} className="h-6" alt="star"></img>
                </span>
              }
              emptySymbol={
                <span>
                  <img src={starEmpty} className="h-6" alt="star"></img>
                </span>
              }
            />
          </div>
        </div>
      </div>
      <div className=" bg-blue-600 text-white p-2 rounded-b-2xl">
        <div className="font-semibold text-2xl border-b border-white mt-2">
          {doctor.name}
        </div>
        <div className="mt-4">{doctor.about.slice(0, 200)}</div>
        <div className="mt-4">
          {/* <span className="text-lg">Experience:</span>{" "} */}
          Experience of {doctor.experienceYears}+ years
        </div>
        <div className="mt-4">
          {/* <span className="text-lg">Experiences:</span>{" "} */}
          {doctor.experiences.slice(0, 1).join(", ")}
        </div>
        <div className="mt-4">{doctor.expertise.join(", ")}</div>
      </div>
    </div>
  );
};

export default DoctorCard;
