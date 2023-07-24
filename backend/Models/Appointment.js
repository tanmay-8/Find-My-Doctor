const mongoose = require("mongoose")
const {Schema} = mongoose

const AppointmentSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    doctor:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    doctorName:{
        type:String,
        required:true
    },
    doctorAddress:{
        type:String,
        required:true
    },
    patientName:{
        type:String,
        required:true
    },
    patientAge:{
        type:Schema.Types.Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    appointmentTime:{
        type:Schema.Types.Decimal128,
        required:true,
    },
    appointmentDate:{
        type:String,
        required:true,
    },
    problem:{
        type:String,
    },
    status:{
        type:String,
        default:"Upcoming"
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

const Appointment = mongoose.model('appointment',AppointmentSchema)
module.exports=Appointment

