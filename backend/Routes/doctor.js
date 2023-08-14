const express = require("express");
const Doctor = require("../Models/Doctor");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../Models/User");
const fetchuser = require("../Middlewares/fetchuser");
const fetchadmin = require("../Middlewares/fetchadmin")
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//Adding doctor: POST "/api/doctor/addDoctor".
router.post(
  "/addDoctor",
  fetchadmin,
  upload.single("image"),
  [
    body("name", "Enter valid name").isLength({ min: 3, max: 30 }),
    body("qualifications", "Enter valid qualifications").isArray({
      min: 1,
      max: 3,
    }),
    body("experienceYears", "Enter your experience yeras").isNumeric(),
    body("expertise", "Enter your fields of expertise").isArray({
      min: 1,
      max: 5,
    }),
    body("experiences", "Enter about your past experiences").isArray({
      min: 1,
      max: 5,
    }),
    body("address", "Enter your address").exists(),
    body("registrationPlace", "Enter place where you are registerd").exists(),
    body("registrationNumber", "Enter your registration number").isNumeric(),
    body("phoneNumber", "Enter your phone number").isMobilePhone(),
    body("email", "Enter your email").isEmail(),
    body("city", "Enter city of your clinic").exists(),
    body("daysInWeek", "Enter days in week minimum 3 ").isArray({
      min: 3,
      max: 6,
    }),
    body("hoursPerDay", "Enter hours per day").isNumeric(),
    body("timeFrom", "Enter starting time").isNumeric(),
    body("timeTo", "Enter ending time").isNumeric(),
  ],

  async (req, res) => {
    let success = false;

    //validating body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors, success });
    }

    const {
      name,
      qualifications,
      experienceYears,
      expertise,
      about,
      experiences,
      address,
      registrationPlace,
      registrationNumber,
      phoneNumber,
      email,
      city,
      daysInWeek,
      hoursPerDay,
      timeFrom,
      timeTo,
    } = req.body;

    //checking if doctor with same registration already exist
    try {
      let doctor = await Doctor.findOne({
        registrationNumber: registrationNumber,
        registrationPlace: registrationPlace,
      });
      if (doctor) {
        console.log("Sorry doctor already exist.");
        return res.status(400).json({
          error: "Sorry doctor already exist.",
          success,
        });
      }

      if (timeFrom > timeTo || timeTo - timeFrom != hoursPerDay) {
        return res.status(500).json({
          error: "Enter correct time",
          success,
        });
      }

      let image = {
        name: req.file.fileName,
        image: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
      };

      //saving doctor in database
      doctor = await Doctor.create({
        name: name,
        qualifications: qualifications,
        registrationPlace: registrationPlace,
        registrationNumber: registrationNumber,
        experiences: experiences,
        experienceYears: experienceYears,
        expertise: expertise,
        about: about,
        address: address,
        phoneNumber: phoneNumber,
        city: city.toUpperCase(),
        daysInWeek: daysInWeek,
        hoursPerDay: hoursPerDay,
        timeFrom: timeFrom,
        timeTo: timeTo,
        email: email,
        image:image
      });

      success = true;
      res.json({ success });
    } catch (error) {
      let success = false;
      console.error(error.message);
      res.status(500).send({
        error: "Some internal server error ocurred",
        success: success,
      });
    }
  }
);

//Getting all doctors : GET "/api/doctor/getDoctors".
router.get("/getDoctors", fetchuser, async (req, res) => {
  try {
    const user = req.user.id;
    let userfound = await User.findById(user)
    if (!userfound) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Getting one doctor : GET "/api/doctor/getDoctor"
router.get("/getDoctor/:id", fetchuser, async (req, res) => {
  try {
    const user = req.user.id;
    let userfound = await User.findById(user)
    if (!userfound) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    const doctor = await Doctor.findOne({ _id: req.params.id });
    res.json(doctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//Getting doctors according to place : "/api/doctor/getDoctorsplace"
router.get("/getDoctorsplace", fetchuser, async (req, res) => {
  try {
    const user = req.user.id;
    let userfound = await User.findById(user)
    if (!userfound) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    let city = req.headers.city.toUpperCase();
    const doctors = await Doctor.find({ city: city });
    res.json(doctors);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;
