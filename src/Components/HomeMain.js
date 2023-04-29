import React, { useState, useContext, useEffect } from "react";
import ham from "../Images/ham.png";
import AfterSearch from "./AfterSearch";
import BeforeSearch from "./BeforeSearch";
import Doctors from "./Doctors";
import doctorContext from "../contexts/doctorContext";
import appointmentContext from "../contexts/appointmentContext";
import Appointment from "./Appointment";
import SelectCity from "./SelectCity";

const HomeMain = () => {
  const context = useContext(doctorContext);
  const context2 = useContext(appointmentContext);
  const { getDoctorsplace } = context;
  const { appointments, getAppointments } = context2;

  useEffect(() => {
    getDoctorsplace();
    getAppointments();
    // eslint-disable-next-line
  }, []);

  const [isSearched, setIsSearched] = useState(false);
  const [query, setQuery] = useState("");

  const disableScroll = () => {
    // To get the scroll position of current webpage
    let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = () => {
      window.scrollTo(LeftScroll, TopScroll);
    };
  };
  const showMenu = () => {
    let menu = document.getElementById("sidebar");
    if (menu.classList.contains("closed")) {
      menu.style.transform = "translateX(100%)";
      menu.classList.add("open");
      menu.classList.remove("closed");
      document.getElementById("homeP").style.pointerEvents = "none";
      disableScroll();
      document.getElementById("closeB").classList.toggle("hidden");
      document.getElementById("openB").classList.toggle("hidden");
    }
  };

  const onSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === "") {
      setIsSearched(false);
    } else {
      setIsSearched(true);
    }
  }, [query]);

  return (
    <div id="homeP" className="h-full w-full ">
      <div className="w-full h-full py-4 px-3 shadow-md flex justify-between  ">
        <button onClick={showMenu} className="">
          <img
            id="openB"
            src={ham}
            alt="menu"
            className="h-10 cursor-pointer"
          ></img>
        </button>
        <SelectCity />
      </div>
      <div className="">
        <div className="w-full py-5 justify-center flex">
          <input
            id="search"
            onChange={(e) => onSearch(e)}
            className="w-5/6 md:w-2/3 text-lg p-2 border-2 border-blue-600 rounded-lg outline-blue-700"
            placeholder={"Search disease, doctor ..."}
          ></input>
        </div>
        {!isSearched ? (
          <BeforeSearch setQuery={setQuery} />
        ) : (
          <AfterSearch query={query} setQuery={setQuery} />
        )}
      </div>
      <hr></hr>
      <div className="py-2">
        {appointments.length !== 0 ? (
          <>
            <div className="p-4">
              <p className="text-gray-500 p-2 ">Recent Appointments</p>
              <Appointment appointment={appointments[0]} />
            </div>
            <hr></hr>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <Doctors />
      </div>
    </div>
  );
};

export default HomeMain;
