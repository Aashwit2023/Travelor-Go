import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import requestCallbackModels from "../models/requestCallback.models.js";

//.............Landing Page.............
export const home = async (req, res)=>{
 try{
   return res.status(200).send("Welcome to Landing Page using controllers ");
 } catch(error) {
   console.error(error);
   return res.status(500).json({message:"Internal Server Error"});
 }
};

//.............SignUp.............
export const signUp = async (req, res) => {
    try {
      const { firstname, lastname, email, password, cnfmPassword } = req.body;
      if (password !== cnfmPassword) {
        return res.status(400).json({message: "Passwords do not match!"});
      }
      const ExistEmail =  await User.findOne({email});
      if (ExistEmail) {
        return res.status(400).json({message: "Email already exists !"})
      }
      const hassedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstname,
        lastname,
        email,
        password: hassedPassword,
        cnfmPassword: hassedPassword,
      });
      return res.status(201).json({
        message: "Account created successfully!",
        user: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message:"Internal Server Error"});
    }
}

//.............Login.............
export const login = async (req, res) => {
 try {
  const { email, password } = req.body;

  const userExist = await User.findOne({email});
  
  if (!userExist) {
    return res.status(400).json({ message: "Invalid email and Password"});
  }
  const isPasswordMatch = await bcrypt.compare(password, userExist.password);

  if (!isPasswordMatch) {
    return res.status(400).json({ message: "Invalid password"});
  }
  console.log(req.body);

   return res.status(200).json({
     message: "Login successful!",
     user: {
      id: userExist._id,
      firstname: userExist.firstname,
      lastname: userExist.lastname,
      email: userExist.email,
     },
   });
 } catch(error) {
   console.error(error);

   return res.status(500).json({ message:"Internal Server Error"});
 }
};


//.............Request-Callback.............
export const requestCallback = async (req, res) => {
  try {
    const {firstName, lastName, email, phone, whatsapp, city, experience, concerns, month, region, specialProgram, treks, call, slots} = req.body;

      if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ message: "Required fields missing" });
      }
    const request = await requestCallbackModels.create({
      firstName,
      lastName,
      email,
      phone,
      whatsapp,
      city,
      experience,
      concerns,
      month,
      region,
      specialProgram,
      treks,
      call,
      slots,
    });
    return res.status(201).json({
      message: "Request submitted successfully!",
      request: {
        id: request._id,
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
        phone: request.phone,
        whatsapp: request.whatsapp,
        city: request.city,
        experience: request.experience,
        concerns: request.concerns,
        month: request.month,
        region: request.region,
        specialProgram: request.specialProgram,
        treks: request.treks,
        call: request.call,
        slots: request.slots,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message + "Internal Server Error"});
  }
};
