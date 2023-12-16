import mongoose from "mongoose";
const userSections = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
		ref: "user",
    },
    Sections:[
        {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Section",
		}
    ]
});

export default mongoose.model("userSections", userSections);