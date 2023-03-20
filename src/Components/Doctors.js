import React, { useContext} from "react";
import doctorContext from "../contexts/doctorContext";
import DoctorCard from "./DoctorCard";

const Doctors = (props) => {
  const context = useContext(doctorContext);
  const { doctors } = context;

  return (
    <div className="p-5">
      <p className="text-gray-500 p-2 ">Popular doctors near you</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
        {doctors.slice(0,6).map((doctor) => {
          return (
            <DoctorCard key={doctor._id} doctor={doctor}/>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
