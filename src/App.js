import "./index.css"
import Home from "./Components/Home";
import Signin from "./Components/Signin";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App font-regular">
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/Signup" element={<SignUp/>}></Route> */}
          <Route path="/Signin" element={<Signin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
