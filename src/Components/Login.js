import React from "react";
import DoctorImg from "../Images/doctor.png";
import Logo from "../Images/logo.png";

function Login() {
  const toLogin = () => {
    let loginD = document.getElementById("login");
    let signupD = document.getElementById("signup");
    let forms = document.getElementById("forms");
    // let loginF = document.getElementById("loginForm");
    // let signupF = document.getElementById("signupForm");

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
    // let loginF = document.getElementById("loginForm");
    // let signupF = document.getElementById("signupForm");

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
          <div className="rounded-t-2xl rounded-b-half w-full h-full p-15 justify-center bg-gradient-to-tr from-rose-400  via-rose-500 to-rose-600 md:rounded-3xl md:rounded-br-extra md:rounded-tr-none">
            <div className=" flex pt-6 pb-8 px-4 items-center  space-x-2 w-fit mx-auto">
              <img src={Logo} alt={"logo"} className="w-8 invert"></img>
              <p className="text-xl font-bold font-logo">Find My Doctor</p>
            </div>
            <img
              src={DoctorImg}
              alt={"doctor"}
              className="h-48 md:h-3/5 rounded-b-full mx-auto shadow-xl mt-6"
            ></img>
            <div className="py-8 text-sm font-bold font-logo text-center">
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
                  <form
                    id="loginForm"
                    className="w-full h-full space-y-6  bg-white transition-all p-4 md:px-8 py-10"
                  >
                    <input
                      className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
                      type={"email"}
                      name={"email"}
                      required={"true"}
                      placeholder={"Email"}
                      spellCheck={"false"}
                    ></input>
                    <input
                      className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
                      type={"password"}
                      name={"password"}
                      required={"true"}
                      minLength={8}
                      placeholder={"Password"}
                      spellCheck={"false"}
                    ></input>
                    <div className="w-fit mx-auto">
                    <input
                      type={"submit"}
                      value={"Login"}
                      className="w-fit mx-auto bg-blue-400 text-white rounded-lg text-lg p-3 cursor-pointer"
                    ></input>
                    </div>
                    <p
                      id="alert"
                      className="text-sm h-5 text-red-600 text-center"
                    ></p>

                    <p
                      id="alert"
                      className="text-sm h-5 text-blue-600 align-bottom"
                    >Forgot password ?</p>
                  </form>
                  <form
                    id="signupForm"
                    className="w-full h-full space-y-6 p-4 bg-white transition-all md:px-8 pt-3 pb-2"
                  >
                    <input
                      className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
                      placeholder={"Name"}
                      spellCheck={"false"}
                      name={"name"}
                    ></input>
                    <input
                      className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
                      placeholder={"Email"}
                      name={"email"}
                      spellCheck={"false"}
                    ></input>
                    <input
                      className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
                      placeholder={"Phone"}
                      name={"phone"}
                      spellCheck={"false"}
                    ></input>
                    <div className="space-y-6 p-0 m-0 space-x-0  md:flex md:space-x-3 md:space-y-0">
                      <input
                        className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
                        placeholder={"Password"}
                        name={"password"}
                        spellCheck={"false"}
                      ></input>
                      <input
                        className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
                        placeholder={"City"}
                        name={"city"}
                        spellCheck={"false"}
                      ></input>
                    </div>
                    <div className="w-fit mx-auto">
                    <input
                      type={"submit"}
                      value={"SignUp"}
                      className=" w-fit mx-auto bg-blue-400 text-white  rounded-lg text-lg p-3 cursor-pointer"
                    ></input>
                    </div>

                    <p
                      id="alert"
                      className="h-5 text-sm text-red-600 text-center -mt-6"
                    ></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// bg-gradient-to-tr from-violet-400 via-violet-500 to-violet-700

export default Login;
