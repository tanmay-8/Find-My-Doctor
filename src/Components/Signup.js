import {React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const nevigate = useNavigate()
   // initializing credentials
   const [cred, setCred] = useState({name:"",email: "",phoneNumber:"",city:"",password: "" });

   //to set credentials on change of input
   const onChange = (e) => {
     setCred({ ...cred, [e.target.name]: e.target.value });
   };
 
   const createUser = async (e) => {
     let alert = document.getElementById("alert");
     try {
       e.preventDefault();
       const response = await fetch(
         "http://localhost:5000/api/user/addUser",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(cred),
         }
       );
 
       const json = await response.json();
 
       if (json.success) {
        localStorage.setItem("Health-token",json.authtoken)
        localStorage.setItem("Health-place",cred.city[0].toUpperCase()+cred.city.slice(1).toLowerCase())
         nevigate("/")
       } else{
         alert.innerHTML = json.error 
       }
     } catch {
       alert.innerHTML = "Internal server error.";
     }
   };
  return (
    <div className="w-full h-full ">
      <form
        id="signupForm"
        className="w-full h-full space-y-6 p-4 bg-white transition-all md:px-8 pt-3 pb-2"
        onSubmit={createUser}
      >
        <input
          className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
          placeholder={"Name"}
          minLength={3}
          maxLength={30}
          required={true}
          type={"text"}
          onChange={onChange}
          spellCheck={"false"}
          name={"name"}
        ></input>
        <input
          className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
          placeholder={"Email"}
          required={true}
          type={"email"}
          onChange={onChange}
          name={"email"}
          spellCheck={"false"}
        ></input>
        <input
          className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
          placeholder={"Phone"}
          name={"phoneNumber"}
          required={true}
          type={"tel"}
          minLength={10}
          maxLength={10}
          min={0}
          onChange={onChange}
          spellCheck={"false"}
        ></input>
        <div className="space-y-6 p-0 m-0 space-x-0  md:flex md:space-x-3 md:space-y-0">
          <input
            className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
            placeholder={"Password"}
            type={"password"}
            required={true}
            minLength={8}
            onChange={onChange}
            maxLength={30}
            name={"password"}
            spellCheck={"false"}
          ></input>
          <input
            className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
            placeholder={"City"}
            name={"city"}
            onChange={onChange}
            type={"text"}
            required={true}
            minLength={3}
            maxLength={30}
            spellCheck={"false"}
          ></input>
        </div>
        <div className="w-fit mx-auto">
          <input
            type={"submit"}
            value={"SignUp"}
            className=" w-fit mx-auto bg-blue-500 text-white  rounded-lg text-lg p-3 cursor-pointer hover:scale-110 transition-all"
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
