import "./index.css";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import DoctorState from "./contexts/DoctorState";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App font-regular h-full w-full overflow-x-hidden">
      <DoctorState>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/Signup" element={<SignUp/>}></Route> */}
          <Route path="/Signin" element={<Signin />}></Route>
        </Routes>
      </DoctorState>
    </div>
  );
}

export default App;
