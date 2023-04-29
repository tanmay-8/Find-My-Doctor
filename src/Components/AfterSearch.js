import React, { useContext, useEffect, useState } from "react";
import doctorContext from "../contexts/doctorContext";
import DoctorCard from "./DoctorCard";
import closeImg from "../Images/close.png";

const AfterSearch = (props) => {
  const context = useContext(doctorContext);
  const { doctors } = context;
  const { query,setQuery } = props;

  const isInclude = (expertise, query) => {
    for (let i = 0; i < expertise.length; i++) {
      if (expertise[i].toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
    }
    return false;
  };

  const filter = (doctors, query) => {
    // eslint-disable-next-line
    let filtered = doctors.filter((doctor) => {
      if (query === undefined || query === "") {
        // eslint-disable-next-line
        return;
      } else if (isInclude(doctor.expertise, query)) {
        return doctor;
      }
    });
    return filtered;
  };
  const [filtered, setFilteres] = useState([]);
  useEffect(() => {
    setFilteres(filter(doctors, query));
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className="transition-all">
      <div className="p-5 space-y-2">
        <button className="cursor-pointer transition-all hover:scale-105" onClick={()=>setQuery("")}>
          <img src={closeImg} alt="close" className="h-8"></img>
        </button>
        {filtered.length === 0 ? (
          <div className="text-center">
            <p className="text-2xl font-bold">DOCTOR NOT FOUND</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((doctor) => {
              return <DoctorCard doctor={doctor} key={doctor._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AfterSearch;
