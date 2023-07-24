import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const nevigate = useNavigate();
  
  // initializing credentials
  const [cred, setCred] = useState({ email: "", password: "" });

  //to set credentials on change of input
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    let alert = document.getElementById("alert");
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cred),
      });

      const json = await response.json();

      console.log(json)

      if (json.success) {
        localStorage.setItem("Health-token", json.authtoken);
        localStorage.setItem(
          "Health-place",
          json.user.city[0].toUpperCase() + json.user.city.slice(1).toLowerCase()
        );
        localStorage.setItem("Health-name", json.user.name);
        localStorage.setItem("Health-email", json.user.email);
        localStorage.setItem("Health-phone", json.user.phoneNumber);

        nevigate("/");
      } else {
        alert.innerHTML = json.error;
      }
    } catch(error){
      console.log(error)
      alert.innerHTML = "Internal server error.";
    }
  };

  return (
    <div className="w-full h-full ">
      <form
        id="loginForm"
        className="w-full h-full space-y-6  bg-white transition-all p-4 md:px-8 py-10"
        onSubmit={login}
      >
        <input
          className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
          type={"email"}
          name={"email"}
          required={true}
          placeholder={"Email"}
          spellCheck={"false"}
          onChange={onChange}
        ></input>
        <input
          className="w-full p-3 pb-1 text-xl border-b-2 border-blue-400 outline-none"
          type={"password"}
          name={"password"}
          required={true}
          minLength={8}
          placeholder={"Password"}
          spellCheck={"false"}
          onChange={onChange}
        ></input>
        <div className="w-fit mx-auto">
          <input
            type={"submit"}
            value={"Login"}
            className="w-fit mx-auto bg-blue-500 text-white rounded-lg text-lg p-3 cursor-pointer hover:scale-110 transition-all"
          ></input>
        </div>
        <p id="alert" className="text-sm h-5 text-red-600 text-center"></p>

        <p id="forgotP" className="text-sm h-5 text-blue-600 align-bottom">
          Forgot password ?
        </p>
      </form>
    </div>
  );
}

export default Login;
