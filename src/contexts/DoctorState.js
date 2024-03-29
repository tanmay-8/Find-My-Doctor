import { useState } from "react";
import doctorContext from "./doctorContext";

const DoctorState = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(null);

  const getDoctorsplace = async () => {
    const response = await fetch(
      "http://localhost:5000/api/doctor/getDoctorsplace",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Health-token"),
          city: localStorage.getItem("Health-place"),
        },
      }
    );
    let json = await response.json();
    json = json.reverse();
    setDoctors(json);
  };

  const getDoctor = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/doctor/getdoctor/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Health-token"),
        },
      }
    );
    let json = await response.json();
    setDoctor(json);
    return json;
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
