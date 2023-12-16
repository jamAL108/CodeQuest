import mongoose from "mongoose";
const Section = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  jobID:{
    type:String,
    required:true
  },
  roleType: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true,
  },
  status:{
    type:boolean,
    required:true
  },
  content:{
    type:[]
  }
});

export default mongoose.model("Section", Section);
