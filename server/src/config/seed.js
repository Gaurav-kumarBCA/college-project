require("dotenv").config();
const User=require("../models/user")
const {hasspassword}=require("../utiles/index")
const {connectDB}=require("../config/db")
const saltRound = 10;


const dbSeed=async()=>{
    try {
        await connectDB();
        console.log("Database Seeding");
        console.log("Admin Created as a user");
        const admin=new User({
            name:"Admin",
            email:"admin@gmail.com",
            password:await hasspassword("admin",saltRound),
            role:"admin"
        });
        await admin.save();
        console.log(admin);
        console.log("Admin Created Successfully!")
        process.exit(0)
    } catch (error) {
        if(error.code ===11000){
            console.log("A user with this email already exist!")
            process.exit(1);
        }
        console.log(error);
        console.log("Somthing went wrong");
        process.exit(1);
    }
};

dbSeed();