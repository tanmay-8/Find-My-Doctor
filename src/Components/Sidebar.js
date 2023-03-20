import React from "react";
import close from "../Images/close.png";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const {setToken} = props
  const nevigate = useNavigate();

  const toLogin = () => {
    nevigate("/Signin");
  };
  const logout = () => {
    toLogin();
    localStorage.removeItem("Health-token");
    setToken(null);
  };
  const enableScroll=()=> {
    window.onscroll = function() {};
    }
  const hideMenu = () => {
    let menu = document.getElementById("sidebar");
    if (menu.classList.contains("open")) {
      menu.style.transform = "translateX(0%)";
      menu.classList.add("closed");
      menu.classList.remove("open");
      document.getElementById("homeP").style.pointerEvents="all"
      enableScroll()
      document.getElementById("closeB").classList.toggle("hidden");
      document.getElementById("openB").classList.toggle("hidden");
    }
  };
  return (
    <div
      id="sidebar"
      className="closed h-screen w-72 bg-slate-50 shadow-2xl -ml-72 transition-all duration-300"
    >
      <div className="h-1/4 bg-blue-700 ">
        <div className="flex w-full py-2 justify-end">
          <img
            id="closeB"
            className="h-6 -mr-7 cursor-pointer hidden transition-all"
            onClick={hideMenu}
            alt="close"
            src={close}
          ></img>
        </div>
      </div>

      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default Sidebar;
