import { useState } from "react";
import appointmentContext from "./appointmentContext";

const AppointmentState = (props) => {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState({});

  const bookAppointment = async (body) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/appointment/bookAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("Health-token"),
          },
          body: JSON.stringify(body),
        }
      );
      let json = await response.json();
      return json;
    } catch (e) {
      console.log(e);
    }
  };


  const getAppointments = async () => {
    const response = await fetch(
      "http://localhost:5000/api/appointment/getAppointments",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Health-token"),
        },
      }
    );
    let json = await response.json();
    json = json.reverse();
    setAppointments(json);
  };

  const getAppointment = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/appointment/getappointment/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Health-token"),
        },
      }
    );
    let json = await response.json();
    setAppointment(json);
  };


  const cancelAppointment = async (id) => {
    // api call
    const response = await fetch(
      `http://localhost:5000/api/appointment/setStatus/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Health-token"),
        },
        body: JSON.stringify({
          status: "Canceled",
        }),
      }
    );
    let json = await response.json();
    await getAppointments();
    return json;
  };

  return (
    <appointmentContext.Provider
      value={{
        appointments,
        getAppointments,
        appointment,
        getAppointment,
        bookAppointment,
        cancelAppointment,
      }}
    >
      {props.children}
    </appointmentContext.Provider>
  );
};

export default AppointmentState;
