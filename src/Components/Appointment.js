import React from "react";
import Feedback from "./Feedback";
import Cancel from "./Cancel";

// Appointment card
const Appointment = (props) => {
  const { appointment } = props;

  return (
    <div className="rounded-lg shadow-lg border border-blue-700">
      <div className="md:flex w-full">
        <div className="md:rounded-tr-none md:rounded-tl-lg rounded-t-lg md:w-1/2 md:border-r border-gray-300">
          <p className="text-xl md:rounded-tr-none md:rounded-tl-lg rounded-t-lg bg-slate-100 p-2 text-blue-900 font-bold">
            Doctor Info
          </p>
          <div className="p-2 space-y-2 text-lg">
            <div>
              <div className=" font-semibold ">Name : </div>
              <div>{appointment.doctorName}</div>
            </div>
            <div>
              <div className=" font-semibold ">Address : </div>
              <div>{appointment.doctorAddress}</div>
            </div>
          </div>
        </div>
        <div className="md:rounded-tr-lg md:w-1/2">
          <p className="font-bold text-xl bg-slate-100 md:rounded-tr-lg p-2 text-blue-900">
            Patient Info
          </p>
          <div className="p-2 space-y-2">
            <div className=" space-x-2">
              <span className=" font-semibold ">Name : </span>
              <span>{appointment.patientName}</span>
            </div>
            <div className=" space-x-2">
              <span className=" font-semibold ">Age : </span>
              <span>{appointment.patientAge}</span>
            </div>
            <div className=" space-x-2">
              <span className=" font-semibold ">Date : </span>
              <span>{appointment.appointmentDate}</span>
            </div>
            <div className=" space-x-2">
              <span className=" font-semibold ">Time : </span>
              <span>{appointment.appointmentTime.$numberDecimal}</span>
            </div>
            <div className=" space-x-2">
              <span className=" font-semibold ">Gender : </span>
              <span>{appointment.gender}</span>
            </div>
            <div className=" space-x-2">
              <span className=" font-semibold ">Phone : </span>
              <span>{appointment.phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 px-3 py-2 flex justify-between rounded-b-lg items-center">
        <div className="text-lg">Status : {appointment.status}</div>
        <div>
        {(appointment.status==='Upcoming')?
        <div><Cancel id={appointment._id}/></div>:(appointment.status==='Completed')?
        <Feedback doctor={appointment.doctor}/>
        :<div></div>
        }</div>
      </div>
    </div>
 
  );
};

export default Appointment;
