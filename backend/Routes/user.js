const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../Middlewares/fetchuser");

//JWT signature to give and check authtoken
const JWT_SECRET = process.env.JWT_SIGN;


//Adding user : POST "api/user/addUser"
router.post(
  "/addUser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("city", "Enter city").exists(),
    body("phoneNumber", "Enter your phone number").isMobilePhone(),
    body("password", "Enter password min length 5").isLength({ min: 8 }),
  ],

  async (req, res) => {
    let success = false;

    //validating body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ error: errors, success });
    }

    //checking if user with email already exist
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: "Sorry user with this email already exist.",
          success,
        });
      }

      //hashing password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //saving user in database
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
      });

      //giving authorization token
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ authtoken, success,user });
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

//Loging in using email and password : POST "api/user/login"
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can not be blamk").exists(),
  ],
  async (req, res) => {
    let success = false;

    //validating body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ error: errors, success });
    }


    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        console.log("no user with this email");
        return res
          .status(400)
          .json({ error: "No user with this email", success });
      }

      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        console.log("Try to login with correct credentials");
        return res
          .status(400)
          .json({ error: "Try to login with correct credentials", success });
      }

      //giving authorization token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ authtoken, success, user:user });
    } catch (error) {
      let success = false;
      console.error(error);
      res.status(500).send({
        error: "Some internal server error ocurred",
        success: success,
      });
    }
  }
);

// Updating city :  PATCH "api/user/updateCity"
router.patch(
  "/updateCity",
  [body("city", "Enter city").exists()],
  fetchuser,
  async (req, res) => {
    try {
      const { city } = req.body;
      const userid = req.user.id;
      const user = await User.findById(userid)
      if (!user) {
        return res
          .status(400)
          .send({ error: "User not found", success: false });
      }
      let updatedUser = await User.findByIdAndUpdate(
        userid,
        {
          city: city,
        },
        { new: true }
      );
      res.send({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "internal server user" });
    }
  }
);

// Updating user :  PUT "api/user/updateUser"
router.put("/updateUser", fetchuser, async (req, res) => {
  try {
    let success = false;
    const { name, city, email, password, phoneNumber } = req.body;
    const userFound = await User.findById(req.user.id);

    if (!userFound) {
      return res
        .status(404)
        .send({ error: "User not found", success: success });
    }


    const passwordcompare = await bcrypt.compare(password, userFound.password);
    if (!passwordcompare) {
      console.log("Incorrect Password");
      return res
        .status(401)
        .json({ error: "Incorrect password", success });
    }

    let newDetail = {};
    if (
      name &&
      body("name", "Enter name").isLength({ min: 5, max: 30 })
    ) {
      newDetail.name = name;
    }
    if (email && body("email", "Enter email").isEmail()) {
      newDetail.email = email;
    }
    if (city && body("city", "Enter city").exists()) {
      newDetail.city = city;
    }
    if (phoneNumber && body("phoneNumber", "Enter phoneNumber").isMobilePhone()) {
      newDetail.phoneNumber = phoneNumber;
    }

    const user = await User.findByIdAndUpdate(req.user.id, { $set: newDetail });

    if (user) {
      success = true;
    }
    res.send({ user, success });
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: "internal server error" });
  }
});

module.exports = router;
