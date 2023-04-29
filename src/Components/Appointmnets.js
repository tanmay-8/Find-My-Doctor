import React, { useContext, useEffect } from "react";
import appointmentContext from "../contexts/appointmentContext";
import Appointment from "./Appointment";
import backImg from "../Images/back.png";
import { useNavigate } from "react-router-dom";

const Appointmnets = () => {

  const nevigate = useNavigate();

  const context = useContext(appointmentContext);
  const { appointments, getAppointments } = context;

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="p-4 flex items-center relative justify-center text-2xl text-blue-900 bg-white shadow-md">
        <button className="absolute left-4 top-4">
          <img
            src={backImg}
            className="h-8 md:h-10 hover:scale-110 transition-all duration-200 "
            alt={"back"}
            onClick={() => nevigate(-1)}
          ></img>
        </button>
        <div>
          Appointments
        </div>
      </div>
      {appointments.length === 0 ? (
        <div className="text-xl font-bold text-center p-2">No Appointments</div>
      ) : (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointments.slice(0, 6).map((appointment) => {
            return (
              <Appointment key={appointment._id} appointment={appointment} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Appointmnets;
