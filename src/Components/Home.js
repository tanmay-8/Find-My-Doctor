import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import Intro from "./Intro";

function Home() {
  let [token, setToken] = useState(localStorage.getItem("Health-token"));
  const nevigate = useNavigate();

  const toLogin = () => {
    nevigate("/Signin");
  };
  const logout = () => {
    toLogin()
    localStorage.removeItem("Health-token");
    setToken(null);
  };

  return (
    <>
      {token === null ? (
    // toLogin()
        <div className="w-full h-full">
          <Intro />
        </div>
      ) : (
        <div>
          <p>Home</p>
          <button
            className="bg-red-500 p-5 rounded-lg shadow-lg"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
