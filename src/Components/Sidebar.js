import React from "react";
import close from "../Images/close.png";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import logOut from "../Images/logout.png"
import home from "../Images/home.png";
import settings from "../Images/settings.png";
import appointments from "../Images/appointment.png";

const Sidebar = () => {
  const nevigate = useNavigate();

  const enableScroll = () => {
    window.onscroll = function () {};
  };

  const hideMenu = () => {
    let menu = document.getElementById("sidebar");
    if (menu.classList.contains("open")) {
      menu.style.transform = "translateX(0%)";
      menu.classList.add("closed");
      menu.classList.remove("open");
      document.getElementById("homeP").style.pointerEvents = "all";
      enableScroll();
      document.getElementById("closeB").classList.toggle("hidden");
      document.getElementById("openB").classList.toggle("hidden");
    }
  };
  const toHome = () => {
    nevigate("/");
    hideMenu();
  };

  const logout = () => {
    localStorage.removeItem("Health-token");
    localStorage.removeItem("Health-place");
    localStorage.removeItem("Health-name");
    localStorage.removeItem("Health-email");
    localStorage.removeItem("Health-phone");
    window.location.reload()
  };
  return (
    <div
      id="sidebar"
      className="closed h-screen w-72 bg-slate-50 shadow-2xl -ml-72 transition-all duration-300"
    >
      <div className="bg-blue-600 flex w-full h-1/5 py-2 pb-4">
        <div className="w-full p-2 space-y-4">
          <img src={logo} alt="logo" className="invert h-2/3 mx-auto"></img>
          <p className="text-2xl font-medium text-white text-center">
            Find My Doctor
          </p>
        </div>
        <img
          id="closeB"
          className="h-7 -mr-7 cursor-pointer hidden transition-all"
          onClick={hideMenu}
          alt="close"
          src={close}
        ></img>
      </div>
      <div className="py-5 pl-10 pr-1 space-y-5">
        <div
          className="cursor-pointer pb-2 border-blue-700 transition-all hover:scale-110 flex items-center space-x-4 text-blue-700"
          onClick={toHome}
        >
          <span>
            <img src={home} className="h-10" alt="home"></img>
          </span>
          <span className="text-xl ">Home</span>
        </div>
        <div
          className="cursor-pointer pb-2 border-blue-700 transition-all hover:scale-110 flex items-center space-x-4 text-blue-700"
          onClick={() => {
            hideMenu();
            nevigate("/Appointments");
          }}
        >
          <span>
            <img src={appointments} className="h-10" alt="appointments"></img>
          </span>
          <span className="text-xl ">Appointments</span>
        </div>

        <div
          className="cursor-pointer pb-2 border-blue-700 transition-all hover:scale-110 flex items-center space-x-4 text-blue-700"
          onClick={() => {
            hideMenu();
            nevigate("/Setting");
          }}
        >
          <span>
            <img src={settings} className="h-10" alt="settings"></img>
          </span>
          <span className="text-xl ">Settings</span>
        </div>
        <div
          className="cursor-pointer pb-2 border-blue-700 transition-all hover:scale-110 flex items-center space-x-4 text-blue-700"
          onClick={logout}
        >
          <span>
            <img src={logOut} className="h-10" alt="logout"></img>
          </span>
          <span className="text-xl ">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
