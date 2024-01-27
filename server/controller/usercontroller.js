import User from "../models/user.js";
import userSections from "../models/userSections.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const Login = async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const user = await User.findOne({ email: data.email });
    if (!user) {
      const usernameError = "user doesn't exist or invalid credentials";
      return res.status(404).send({ error: usernameError });
    }
    const passwordcorrect = await bcrypt.compare(data.password, user.password);
    if (!passwordcorrect) {
      const passwordError = "user doesn't exist or invalid credentials";
      return res.status(404).send({ error: passwordError });
    }
    return res
      .status(200)
      .send({ message: "User logged in successfully", success: true , user });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ error: err });
  }
};

export const Register = async (req, res) => {
  try {
    console.log("helo")
    const data = req.body;
    const existinguser = await User.findOne({ email: data.email });
    if (existinguser) {
      return res.status(400).send({ error: "user Already exists Try with a new mail ID" });
    }
    let hashedPassword;
    hashedPassword = await bcrypt.hash(data.password, 10);
    const newuser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,  
      organization: data.organization,
      typeOfWork: data.typeOfWork,
    });
    await newuser.save();
    console.log(newuser)
    return res.status(200).send({ message: "success" , user:newuser});
  } catch (err) {
    console.log(err);
    return res.status(404).send({ error: err });
  }
};

export const fetchSection = async (req, res) => {
  try {
    console.log("HEEEEEEELooo")
    const { id } = req.params;
    const existinguser = await User.findOne({ _id: id });
    if (!existinguser) {
      return res.status(400).send({ error: "USER DOESNT EXISTS , BRUHHHH SIGNUP KAR LA*DE" });
    }
    const user_sections = await userSections.findOne({user:id})
    if(!user_sections){
      const userSection = new userSections({
         user:id,
         Sections:[]
      })
      await userSection.save()
      return res.status(201).send({message:"User sections created" , data:[]})
    }
    return res.status(200).send({message:"use sections fetched" , data:user_sections.Sections})
  } catch (err) {
    console.log(err);
    return res.status(404).send({ error: err });
  }
};
