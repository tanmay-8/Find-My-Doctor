const express = require("express");
const Rating = require("../Models/Rating");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../Middlewares/fetchuser");
const User = require("../Models/User");
const Doctor = require("../Models/Doctor");

//Adding rating : POST "/api/rating/addRating"
router.post(
  "/addRating",
  [
    body("rating", "Enter valid rating").isNumeric(),
    body("desc", "Enter valid description min length 10").isLength({ min: 10 }),
    body("doctor", "Enter valid doctor").exists(),
  ],
  fetchuser,
  async (req, res) => {
    try {
      let success = false;

      const { rating, desc, doctor } = req.body;
      const user = req.user.id;

      //validating body 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors, success });
      }

      // cheking if user is authorized
      let userfound = await User.findById(user)
      if (!userfound) {
        return res.status(401).json({ msg: "Unauthorized" });
      }

      // checking if doctor exists
      let doctorfound = await Doctor.findOne({ _id: doctor });
      if (!doctorfound) {
        return res.status(404).json({ msg: "Doctor not found" });
      }

      // calculating new rating
      let ratingsGiven = doctorfound.numberOfRatings+1;
      if(doctorfound.numberOfRatings===0){
        ratingsGiven += 1;
      }
      let ratingNow = (parseFloat(doctorfound.rating)+parseFloat(rating))/ratingsGiven;

      // updating rating
      await Doctor.findByIdAndUpdate(doctor,{
        rating:ratingNow,
        numberOfRatings:ratingsGiven
      })


      const newRating = new Rating({
        user: user,
        name: userfound.name,
        desc: desc,
        rating: rating,
        doctor: doctor,
      });

      const saved_rating = await newRating.save();

      success = true;
      res.json({success:success });
    } catch (error) {
      let success = false;
      console.error(error.message);
      res.status(500).send("Some internal server error ocurred");
    }
  }
);

//getting rating given to certain doctor : GET "/api/rating/getBydoctor/:doctor"
router.get("/getBydoctor/:doctor",fetchuser, async (req, res) => {
  try {
    let user = req.user.id
    // cheking if user is authorized
    let userfound = await User.findById(user)
    if (!userfound) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const doctor = req.params.doctor;
    const ratings = await Rating.find({doctor:doctor });
    res.send(ratings);
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal server error");
  }
});

//getting rating given by certain user : GET "/api/rating/getByuser"
router.get("/getByuser", fetchuser, async (req, res) => {
  try {
    let user = req.user.id
    // cheking if user is authorized
    let userfound = await User.findById(user)
    if (!userfound) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const ratings = await Rating.find({ user: user });
    res.send(ratings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
