import { useState } from "react";
import doctorContext from "./doctorContext";

const DoctorState = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(null);

  
  const getDoctorsplace = async () => {
    console.log("run")
    // api call
    const response = await fetch("http://localhost:5000/api/doctor/getDoctorsplace", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("Health-token"),
        "city":localStorage.getItem("Health-place")
      },
      
    });
    let json = await response.json();
    console.log(json)
    json = json.reverse();
    setDoctors(json);
  };

  //get place using id
  const getDoctor = async (id) => {
    // api call
    const response = await fetch(
      `http://localhost:5000/api/doctor/getdoctor/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let json = await response.json();
    setDoctor(json);
  };

  return (
    //sending props in context
    <doctorContext.Provider
      value={{
        doctors,
        doctor,
        setDoctor,
        setDoctors,
        getDoctorsplace,
        getDoctor,
      }}
    >
      {props.children}
    </doctorContext.Provider>
  );
};

export default DoctorState;
