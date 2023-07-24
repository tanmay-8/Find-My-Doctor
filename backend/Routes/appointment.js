const express = require("express");
const Appointment = require("../Models/Appointment");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../Middlewares/fetchuser");
const User = require("../Models/User");
const Doctor = require("../Models/Doctor");

//Booking Appointment : POST "/api/appointment/bookAppointment"
router.post(
  "/bookAppointment",
  [
    body("patientName", "Enter patient name min length 5 max length 40")
      .exists()
      .isLength({ min: 5, max: 40 }),
    body("patientAge", "Enter valid age").isNumeric(),
    body("phoneNumber", "Enter valid number").exists(),
    body("doctor", "Enter valid doctor").exists(),
    body("gender", "Enter gender of patient").exists(),
    body("appointmentTime", "Enter appointment time").exists(),
    body("appointmentDate", "Enter appointment date").exists(),
    body("problem", "Enter problem").exists(),
  ],
  fetchuser,
  async (req, res) => {
    try {
      let success = false;

      const {
        patientName,
        patientAge,
        doctor,
        gender,
        appointmentTime,
        appointmentDate,
        phoneNumber,
        problem,
      } = req.body;
      const user = req.user.id;

      // Validating body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).send({ errors: errors, success: success });
      }

      // Checking if user authorized
      let userfound = await User.findById(user);
      if (!userfound) {
        console.log("Unauthorized");
        return res.status(401).send({ msg: "Unauthorized" });
      }

      // Checking if doctor exists
      let doctorfound = await Doctor.findOne({ _id: doctor });
      if (!doctorfound) {
        console.log("Doctor Not Found");
        return res.status(404).send({ msg: "Doctor not found" });
      }

      // getting appointment day and date
      let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      let date = new Date(appointmentDate);
      let day = days[date.getDay()];

      // getting available days and times
      let availabelDays = doctorfound.daysInWeek;
      let timeStart = doctorfound.timeFrom;
      let timeEnd = doctorfound.timeTo;
      let booked = doctorfound.booked;

      // if appointment date is passed is after one month
      if (date.getTime() < Date.now() || date.getTime() > Date.now() + 2678400000) {
        return res
          .status(400)
          .json({ error: "Enter valid date", success: success });
      }

      //if date not available
      if (!availabelDays.includes(day)) {
        return res
          .status(404)
          .json({ error: "Date not available", success: success });
      }

      //if time is outof range
      if (!(appointmentTime > timeStart && appointmentTime < timeEnd)) {
        console.log("Not Found");
        return res
          .status(404)
          .json({ error: "Time not available", success: success });
      }

      let bookInfo = {
        date: appointmentDate,
        time: appointmentTime,
      };

      // checking if slot is available on given date
      let isDate = false;
      for (let i = 0; i < booked.length; i++) {
        if (booked[i].date === bookInfo.date) {
          if (booked[i].time.includes(parseFloat(bookInfo.time))) {
            return res
              .status(400)
              .json({ error: "Time not available", success: success });
          } else {
            booked[i].time.push(bookInfo.time);
          }
          isDate = true;
        }
      }

      if (!isDate) {
        booked.push({ date: bookInfo.date, time: [bookInfo.time] });
      }


      const newAppointment = new Appointment({
        user: user,
        patientName: patientName,
        patientAge: patientAge,
        gender: gender,
        appointmentTime: appointmentTime,
        appointmentDate: appointmentDate,
        doctor: doctor,
        doctorName: doctorfound.name,
        doctorAddress: doctorfound.address,
        phoneNumber: phoneNumber,
        problem: problem,
      });

      const saved_appointment = await newAppointment.save();

      const updateBooked = await Doctor.findByIdAndUpdate(
        doctor,
        {
          booked: booked,
        },
        { new: true }
      );

      success = true;
      res.json({ success: success });

    } catch (error) {
      let success = false;
      console.error(error.message);
      res.status(500).send("Some internal server error ocurred");
    }
  }
);

//Getting Appointments : GET "/api/appointment/gatAppointments"
router.get("/getAppointments", fetchuser, async (req, res) => {
  try {
    const user = req.user.id;
    let userfound = await User.findById(user);
    if (!userfound) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    const appointments = await Appointment.find({ user: user });
    res.send(appointments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//Getting one appointment : GET "/api/appointment/getAppointment/:id"
router.get("/getAppointment/:id", fetchuser, async (req, res) => {
  try {
    const user = req.user.id;
    let userfound = await User.findById(user);
    if (!userfound) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    const appointment = await Appointment.findOne({ _id: req.params.id });
    res.send(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//Updating status of appointment: PATCH "/api/appointment/setStatus/:id"
router.patch(
  "/setStatus/:id",
  body("status", "Enter status").exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors, success });
      }

      const id = req.params.id;
      const appointment = await Appointment.findOne({ _id: req.params.id });
      if (!appointment) {
        return res.status(404).json({ msg: "Appointment not found" });
      }

      const { status } = req.body;
      const updated = await Appointment.findByIdAndUpdate(id, {
        status: status,
      });
      res.send({ success: true });
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;
