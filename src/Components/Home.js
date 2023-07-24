import React, { useState } from "react";
import Intro from "./Intro";
import Sidebar from "./Sidebar";
import "reactjs-popup/dist/index.css";
import HomeMain from "./HomeMain";

function Home() {
  const [token, setToken] = useState(localStorage.getItem("Health-token"));

  return (
    <>
      {token === null ? (
        <div className="w-full h-full">
          <Intro />
        </div>
      ) : (
        <div className="h-full w-full flex">
          <Sidebar setToken={setToken} />
          <HomeMain />
        </div>
      )}
    </>
  );
}

export default Home;
