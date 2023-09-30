import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    contact : {
        type: String,
        required: [true, "Please provide a contact"],
    },
    address : {
        type: String,
        required : [true, "Please provide a address"],
    },
    qualification : {
        type: String,
        required : [true, "Please provide your qualification"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isOphthalmologist: {
        type: Boolean,
        default: false,
        description: 'Indicates whether the user is an ophthalmologist.'
    },
    role: String ,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;