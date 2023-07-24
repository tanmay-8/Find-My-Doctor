import "./index.css";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import DoctorState from "./contexts/DoctorState";
import BookAppointment from "./Components/BookAppointment";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppointmentState from "./contexts/appointmentState";
import Appointmnets from "./Components/Appointmnets";
import RateState from "./contexts/RateState";
import Setting from "./Components/Setting";

function App() {
  return (
    <div className="App font-regular h-full w-full overflow-x-hidden">
      <AppointmentState>
        <DoctorState>
          <RateState>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Appointments" element={<Appointmnets />}></Route>
              <Route path="/Signin" element={<Signin />}></Route>
              <Route path="/Book" element={<BookAppointment />}></Route>
              <Route path="/Setting" element={<Setting/>}></Route>
            </Routes>
          </RateState>
        </DoctorState>
      </AppointmentState>
    </div>
  );
}

export default App;
