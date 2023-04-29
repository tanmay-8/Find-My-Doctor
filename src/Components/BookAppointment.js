import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import doctorImg from "../Images/doctor.jpg";
import backImg from "../Images/back.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Multiselect from "multiselect-react-dropdown";
// import doctorContext from "../contexts/doctorContext";
import appointmentContext from "../contexts/appointmentContext";

const BookAppointment = () => {
  const nevigate = useNavigate();
  // const context1 = useContext(doctorContext);
  const context2 = useContext(appointmentContext);

  const { bookAppointment, appointments, getAppointments } = context2;

  const location = useLocation();
  const id = location.state.doctor._id;
  const [thisDoc, setThisDoc] = useState(location.state.doctor);

  const [appointment, setAppointment] = useState({
    doctor: id,
    patientName: "",
    patientAge: 1,
    gender: "",
    phoneNumber: "",
    appointmentTime: "",
    appointmentDate: "",
    problem: "",
  });

  useEffect(() => {
    setAppointment({
      doctor: id,
      patientName: "",
      patientAge: 18,
      gender: "",
      phoneNumber: 0,
      appointmentTime: "",
      appointmentDate: "",
      problem: "",
    });
  }, [id, appointments]);

  const [availableTimes, setAvailableTimes] = useState([]);

  const minDate = new Date();
  const maxDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

  const [selectedDate, setSelectedDate] = useState(null);

  const { booked, daysInWeek, timeFrom, timeTo } = thisDoc;

  const checkIfInBookedTime = (time, times) => {
    for (let i = 0; i < times.length; i++) {
      if (parseFloat(times[i].$numberDecimal) === parseFloat(time)) {
        return true;
      }
    }
    return false;
  };
  const istimeAvailable = (e) => {
    let date = e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear();
    for (let i = 0; i < booked.length; i++) {
      if (booked[i].date.includes(date)) {
        if (booked[i].time.length < (timeTo - timeFrom) * 2) {
          return true;
        } else {
          return false;
        }
      }
    }
    return true;
  };

  const getTimes = (date) => {
    let givenDate = { date: date, time: [] };
    for (let i = 0; i < booked.length; i++) {
      if (booked[i].date.includes(date)) {
        givenDate = booked[i];
      }
    }
    let start = timeFrom;
    let end = timeTo;
    let newavailableTimes = [];
    while (start < end) {
      let time = start;
      if (!checkIfInBookedTime(time, givenDate.time)) {
        let afterStr = time - Math.floor(time) === 0 ? "00" : "30";
        let strValue = Math.floor(time) + ":" + afterStr;
        newavailableTimes.push({
          intValue: time,
          strValue: strValue,
        });
      }
      start = start + 0.5;
    }
    setAvailableTimes(newavailableTimes);
  };

  const checkAvailableDate = (e) => {
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let day = weekdays[e.getDay()];
    if (daysInWeek.includes(day) && istimeAvailable(e)) {
      return true;
    } else {
      return false;
    }
  };

  const onChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const book = async (e) => {
    let alert = document.getElementById("alert");
    e.preventDefault();
    if (appointment.appointmentDate.length <= 1) {
      alert.innerHTML = "Select Date";
    } else if (appointment.appointmentTime.length <= 1) {
      alert.innerHTML = "Select Time";
    } else {
      try {
        const json = await bookAppointment(appointment);
        if (!json.success) {
          alert.innerHTML = json.error;
        }else{
          nevigate("/Appointmenst")
        }
      } catch (e) {
        alert.innerHTML = "Internal server error";
      }
    }
  };

  return (
    <div className="min-h-screen w-full  p-10 bg-blue-100">
      {thisDoc !== undefined && thisDoc !== null && thisDoc !== {} ? (
        <div className="w-full h-full p-2 shadow-xl rounded-xl bg-white">
          <div className="">
          <div className="w-fit hover:scale-110 transition-all duration-200">
              <button>
                <img
                  src={backImg}
                  className="h-8 md:h-10"
                  alt={"back"}
                  onClick={() => nevigate(-1)}
                ></img>
              </button>
            </div>
            <img
              src={doctorImg}
              alt="doctorImg"
              className="-mt-6 md:-mt-12 h-28 md:h-32 rounded-full mx-auto"
            ></img>
            <div className="text-center mt-2">
              <p className="text-xl font-semibold text-blue-700">
                {thisDoc.name}
              </p>
              <p className="underline underline-offset-1">
                {thisDoc.qualifications.join(", ")}
              </p>
            </div>
          </div>
          <div className="bg-blue-700 h-h-0.1 w-full"></div>
          <div id="formBook" className="h-full w-full p-5">
            <form className="space-y-4 w-full" onSubmit={book}>
              <div className="w-full space-y-4 md:flex md:space-x-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <span className="w-full font-semibold">Appointment date</span>
                  <ReactDatePicker
                    minDate={minDate}
                    maxDate={maxDate}
                    selected={selectedDate}
                    onChange={(e) => {
                      let date =
                        e.getMonth() +
                        1 +
                        "/" +
                        e.getDate() +
                        "/" +
                        e.getFullYear();
                      setAppointment({
                        ...appointment,
                        appointmentDate: date,
                      });
                      setSelectedDate(e);
                      document
                        .getElementById("time")
                        .classList.remove("hidden");
                      document
                        .getElementById("beforeTime")
                        .classList.add("hidden");
                      getTimes(date);
                    }}
                    filterDate={(e) => checkAvailableDate(e)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div id="time" className="w-full md:w-1/2 hidden">
                  <span className="w-full font-semibold">Time</span>
                  <Multiselect
                    options={availableTimes}
                    displayValue={"strValue"}
                    singleSelect={true}
                    style={{
                      chips: { fontSize: "20px" },
                      searchBox: { fontSize: "20px" },
                    }}
                    onSelect={(selectedItem) => {
                      setAppointment({
                        ...appointment,
                        appointmentTime: selectedItem[0].intValue,
                      });
                    }}
                  />
                </div>
                <div id="beforeTime" className="w-1/2">
                  <span className="w-full font-semibold">Time</span>
                  <p className="text-lg p-2 border rounded-lg">
                    Select Date First
                  </p>
                </div>
              </div>
              <div className="w-full space-y-4 md:flex md:space-x-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <span className="w-full font-semibold">Patient's name</span>
                  <input
                    className="w-full text-lg p-2 border outline-1 rounded-lg"
                    type={"text"}
                    required={true}
                    minLength={5}
                    maxLength={30}
                    onChange={onChange}
                    name={"patientName"}
                  ></input>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="w-full font-semibold">Patient's age</span>
                  <input
                    className="w-full text-lg p-2 border outline-1 rounded-lg"
                    type={"number"}
                    required={true}
                    min={1}
                    onChange={onChange}
                    max={110}
                    name={"patientAge"}
                  ></input>
                </div>
              </div>
              <div className="w-full space-y-4 md:flex md:space-x-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <span className="w-full font-semibold">Gender</span>
                  <Multiselect
                    options={[
                      { name: "Male" },
                      { name: "Female" },
                      { name: "Other" },
                    ]}
                    singleSelect={true}
                    displayValue={"name"}
                    style={{
                      chips: { fontSize: "20px" },
                      searchBox: { fontSize: "20px" },
                    }}
                    onSelect={(selectedItem) => {
                      setAppointment({
                        ...appointment,
                        gender: selectedItem[0].name,
                      });
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="w-full font-semibold">Phone</span>
                  <input
                    className="w-full text-lg p-2 border outline-1 rounded-lg"
                    type={"number"}
                    required={true}
                    max={9999999999}
                    name={"phoneNumber"}
                    min={1111111111}
                    onChange={onChange}
                  ></input>
                </div>
              </div>
              <div className="w-full">
                <span className="w-full font-semibold">Issue</span>
                <textarea
                  className="w-full h-28 resize-none text-lg p-2 outline-1 border"
                  placeholder="(optional )"
                  maxLength={300}
                  name="problem"
                  onChange={onChange}
                ></textarea>
              </div>
              <div>
                <p
                  id="alert"
                  className="h-5 text-sm text-red-600 text-center"
                ></p>
              </div>
              <div className="w-full flex justify-center pt-2">
                <button
                  type={"submit"}
                  className="text-xl bg-green-600 text-white rounded-lg px-8 py-2 shadow-xl mx-auto transition-all hover:scale-110"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>None</div>
      )}
    </div>
  );
};

export default BookAppointment;
