import React from "react";

const Appointment = (props) => {
  const { appointment } = props;
  return (
    <div className="rounded-lg shadow-lg border border-blue-700">
      <div className="md:flex w-full">
        <div className="md:rounded-tr-none md:rounded-tl-lg rounded-t-lg md:w-1/2 md:border-r border-blue-700">
          <p className="text-xl md:rounded-tr-none md:rounded-tl-lg rounded-t-lg  bg-blue-300 p-2 text-blue-900">
            Doctor Info
          </p>
          <div className="p-2 space-y-2 text-lg">
            <div>
              <div className=" font-semibold underline">Name : </div>
              <div>{appointment.doctorName}</div>
            </div>
            <div>
              <div className=" font-semibold underline">Address : </div>
              <div>{appointment.doctorAddress}</div>
            </div>
          </div>
        </div>
        <div className="md:rounded-tr-lg md:w-1/2">
          <p className="text-xl md:rounded-tr-lg bg-blue-300 p-2 text-blue-900">
            Patient Info
          </p>
          <div className="p-2 space-y-2">
            <div className="flex space-x-2">
              <span className=" font-semibold underline">Name : </span>
              <span>{appointment.patientName}</span>
            </div>
            <div className="flex space-x-2">
              <span className=" font-semibold underline">Age : </span>
              <span>{appointment.patientAge}</span>
            </div>
            <div className="flex space-x-2">
              <span className=" font-semibold underline">Date : </span>
              <span>{appointment.appointmentDate}</span>
            </div>
            <div className="flex space-x-2">
              <span className=" font-semibold underline">Time : </span>
              <span>{appointment.appointmentTime.$numberDecimal}</span>
            </div>
            <div className="flex space-x-2">
              <span className=" font-semibold underline">Gender : </span>
              <span>{appointment.gender}</span>
            </div>
            <div className="flex space-x-2">
              <span className=" font-semibold underline">Phone : </span>
              <span>{appointment.phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 px-3 py-2 flex justify-between rounded-b-lg items-center">
        <div className="text-lg">Status : {appointment.status}</div>
        <button className="bg-red-500 text-white p-2 rounded-lg shadow-lg">Cancel</button>
      </div>
    </div>
  );
};

export default Appointment;
