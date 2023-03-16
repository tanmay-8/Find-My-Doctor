import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorImg from "../Images/doctor.png";
import Logo from "../Images/logo.png";
import Login from "./Login";
import Signup from "./Signup";

function Signin() {
    const nevigate = useNavigate();
    const [token,setToken] = useState(null);

    useEffect(()=>{
        if(token!=null){
            localStorage.setItem("Health-token",token);
            nevigate("/");
        }
        //eslint-disable-next-line
    },[token])

    const setTokenF=(token)=>{
        setToken(token)
    }

  const toLogin = () => {
    let loginD = document.getElementById("login");
    let signupD = document.getElementById("signup");
    let forms = document.getElementById("forms");

    if (loginD.classList.contains("text-white")) {
      loginD.classList.add("border-b-4");
      loginD.classList.remove("text-white");
      signupD.classList.add("text-white");
      signupD.classList.remove("border-b-4");
      forms.style.transform = "translateX(0%)";
    }
  };

  const toSignup = () => {
    let loginD = document.getElementById("login");
    let signupD = document.getElementById("signup");
    let forms = document.getElementById("forms");

    if (signupD.classList.contains("text-white")) {
      signupD.classList.add("border-b-4");
      signupD.classList.remove("text-white");
      loginD.classList.add("text-white");
      loginD.classList.remove("border-b-4");
      forms.style.transform = "translateX(-50%)";
    }
  };

  return (
    <div className="p-5 h-auto flex justify-center md:min-h-screen bg-sign-bg bg-cover bg-no-repeat bg-center md:p-20 items-center">
      <div className="md:flex w-full md:h-h-login lg:w-5/6 rounded-3xl shadow-xl">
        <div className="rounded-t-2xl md:w-2/5 md:h-full bg-slate-100 md:rounded-l-3xl text-white">
          <div className="rounded-t-2xl rounded-b-half w-full h-full p-15 justify-center bg-gradient-to-tr from-rose-400  via-rose-500 to-rose-600 md:rounded-3xl md:rounded-br-extra md:rounded-tr-none font-logo">
            <div className=" flex pt-6 pb-8 px-4 items-center  space-x-4 w-fit mx-auto ">
              <img src={Logo} alt={"logo"} className="w-9 invert cursor-pointer hover:w-10"></img>
              <p className="text-2xl font-bold cursor-pointer hover:text-3xl">Find My Doctor</p>
            </div>
            <img
              src={DoctorImg}
              alt={"doctor"}
              className="h-48 md:h-3/5 rounded-b-full mx-auto shadow-xl mt-6"
            ></img>
            <div className="py-8 text-sm font-bold text-center">
              Prevention is better than cure.
            </div>
          </div>
        </div>
        <div className="rounded-b-2xl md:w-3/5 h-full bg-rose-600 md:rounded-r-3xl">
          <div className="px-6 rounded-b-2xl bg-slate-100 w-full h-full md:rounded-bl-none md:rounded-tl-extra md:rounded-3xl py-10 lg:px-20 md:px-16">
            <div className="shadow-xl rounded-2xl h-full bg-slate-200">
              <div className="h-1/6 pt-2 w-full flex text-xl lg:text-2xl font-semibold rounded-t-2xl space-x-2 px-4 bg-slate-200 text-slate-400">
                <div
                  onClick={toLogin}
                  id="login"
                  className="box-border transition-all duration-500 cursor-pointer rounded-tl-2xl py-4 px-2 w-fit text-center border-b-4 border-indigo-500"
                >
                  Sign In
                </div>
                <div
                  onClick={toSignup}
                  id="signup"
                  className="box-border text-white transition-all duration-500 cursor-pointer rounded-tr-2xl py-4 px-2 w-fit text-center border-indigo-500"
                >
                  Sign Up
                </div>
              </div>
              <div className="h-5/6 w-full overflow-hidden box-border rounded-2xl bg-white">
                <div
                  className="w-2full h-full rounded-2xl flex transition-all duration-500"
                  id="forms"
                >
                  <Login set={(e)=>setTokenF(e)} />
                  <Signup set={setTokenF} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
