import React from "react";


function Login() {
  

  return (
    <div className="w-full h-full ">
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
        <p id="alert" className="text-sm h-5 text-red-600 text-center"></p>

        <p id="alert" className="text-sm h-5 text-blue-600 align-bottom">
          Forgot password ?
        </p>
      </form>
    </div>
  );
}

export default Login;
