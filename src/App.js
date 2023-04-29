import "./index.css";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import DoctorState from "./contexts/DoctorState";
import BookAppointment from "./Components/BookAppointment";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppointmentState from "./contexts/appointmentState";
import Appointmnets from "./Components/Appointmnets";

function App() {
  return (
    <div className="App font-regular h-full w-full overflow-x-hidden">
      <AppointmentState>
        <DoctorState>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Appointments" element={<Appointmnets/>}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Book" element={<BookAppointment />}></Route>
          </Routes>
        </DoctorState>
      </AppointmentState>
    </div>
  );
}

export default App;
