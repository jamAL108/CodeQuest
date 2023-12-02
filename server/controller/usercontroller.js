import User from "../models/user.js";
import bcrypt from "bcryptjs";
import Product from "../models/Product.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const Verify = async (req, res) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.status(200).send({ status: true, user });
      } else {
        return res.status(400).send({ status: false });
      }
    }
  });
};

export const Login = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const user = await User.findOne({ username: data.username });
    if (!user) {
      const usernameError = "user doesnt exist";
      return res.status(404).send({ error: usernameError });
    }
    const passwordcorrect = await bcrypt.compare(data.password, user.password);
    if (!passwordcorrect) {
      const passwordError = "Invalid credentials";
      return res.status(404).send({ error: passwordError });
    }
    let token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      secure: true,
      // withCredentials: true,
      httpOnly: true,
      sameSite: "none",
    });
    return res
      .status(201)
      .send({ message: "User logged in successfully", success: true });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ error: baerrckenderror });
  }
};

export const Register = async (req, res) => {
  try {
    const data = req.body;
    const existinguser = await User.findOne({ username: data.username });
    if (existinguser) {
      return res.status(400).send({ error: "user Already exists" });
    }
    let hashedPassword;
    hashedPassword = await bcrypt.hash(data.password, 10);
    const newuser = new User({
      username: data.username,
      password: hashedPassword,
    });
    await newuser.save();
    return res.status(200).send({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ error: err });
  }
};

// export const addproduct = async (req, res) => {
//   try {
//     const data = req.body;
//     var isoDate = new Date();
//     const newProduct = new Product({
//       Name: data.Name,
//       Price: +data.Price,
//       Featured: data.Featured,
//       Rating: +data.Rating,
//       ProductId: data.ProductId,
//       CreatedAt: isoDate.toISOString(),
//       Company: data.Company,
//     });
//     await newProduct.save();
//     return res.status(200).send({ message: "done", response: newProduct });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({ error: err });
//   }
// };

// export const removeproduct = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = await Product.findOne({ _id: id });
//     if (!data) {
//       return res.status(400).send({ message: "Product Doesnt Exists" });
//     }
//     await Product.deleteOne({ _id: id });
//     return res.status(200).send({ response: "Deleted" });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({ error: err });
//   }
// };

// export const getallproduct = async (req, res) => {
//   try {
//     const data = await Product.find({});
//     return res.status(200).send({ response: data });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({ error: err });
//   }
// };

// export const featuredproduct = async (req, res) => {
//   try {
//     console.log("HEllo");
//     const data = await Product.find({ Featured: true });
//     console.log(data);
//     return res.status(200).send({ response: data });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({ error: err });
//   }
// };

// export const updateproduct = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const updateFields = req.body;
//     const product = await Product.findOne({ _id: productId });
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     (product.Name = updateFields.Name),
//       (product.Price = updateFields.Price),
//       (product.Featured = updateFields.Featured),
//       (product.Rating = updateFields.Rating),
//       (product.Company = updateFields.Company);
//     console.log(product);
//     const updatedProduct = await product.save();
//     res
//       .status(200)
//       .send({ message: "Product updated successfully", updatedProduct });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({ error: err });
//   }
// };

// export const Rating_more_than_certain_value_product = async (req, res) => {
//   try {
//     const elem = req.body;
//     console.log(elem);
//     let val = Number(elem.value).toFixed(1);
//     console.log(val);
//     let data = await Product.find({ Rating: { $gt: val } });
//     return res.status(200).send({ response: data });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({ error: err });
//   }
// };

// export const Price_less_than_certain_value_product = async (req, res) => {
//   try {
//     const elem = req.body;
//     console.log(elem);
//     let val = Number(elem.value);
//     console.log(val);
//     let data = await Product.find({ Price: { $lt: val } });
//     return res.status(200).send({ response: data });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({ error: err });
//   }
// };
