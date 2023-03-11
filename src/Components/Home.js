import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let token = localStorage.getItem("Health-token");
  const nevigate = useNavigate();

  const toLogin = () => {
    nevigate("/Login");
  };

  useEffect(()=>{
    if(token===null){
        toLogin();
    }
    // eslint-disable-next-line
  },[])

  return (
    <div>
        <p>Home</p>
    </div>
  );
}

export default Home;
