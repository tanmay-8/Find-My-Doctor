const mongoose = require("mongoose");
const { Schema } = mongoose;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qualifications: {
    type: [String],
    required: true,
  },
  registrationPlace: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: Schema.Types.Number,
    required: true,
  },
  experienceYears: {
    type: Schema.Types.Number,
    required: true,
  },
  expertise: {
    type: [String],
    requird: true,
  },
  about: {
    type: String,
    required: true,
  },
  experiences: {
    type: [String],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Schema.Types.Decimal128,
    default: 0,
  },
  numberOfRatings: {
    type: Schema.Types.Number,
    default: 1,
  },
  daysInWeek: {
    type: [String],
    required: true,
  },
  hoursPerDay: {
    type: Schema.Types.Number,
    required: true,
  },
  timeFrom: {
    type: Schema.Types.Number,
    required: true,
  },
  timeTo: {
    type: Schema.Types.Number,
    required: true,
  },
  booked: {
    type: [
      {
        date: {
          type: String,
        },
        time:[{
          type: Schema.Types.Decimal128,
        }],
      },
    ],
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = mongoose.model("doctor", DoctorSchema);
module.exports = Doctor;
