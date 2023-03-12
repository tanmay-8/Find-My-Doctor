import React from "react";

function Signup() {
  return (
    <div className="w-full h-full ">
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
  );
}

export default Signup;
