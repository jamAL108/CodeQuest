import mongoose from "mongoose";
const user = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  organization:{
    type:String
  },
  typeOfWork:{
    type:String
  }
});

export default mongoose.model("user", user);
