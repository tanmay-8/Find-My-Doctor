const mongoose = require("mongoose")
const {Schema} = mongoose

const RatingSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    doctor:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Schema.Types.Number,
        required:true,
    },
    desc:{
        type:String,
        reuired:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

const Rating = mongoose.model('rating',RatingSchema)
module.exports=Rating


