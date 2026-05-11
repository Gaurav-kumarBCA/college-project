require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./src/config/db");

const auth = require("./src/routes/auth.route");
const adminRoutes = require("./src/routes/admin/index");
const adminmiddleware = require("./src/middleware/admin.middleware");
const hodmiddleware = require("./src/middleware/HOD.middleware");
const user = require("./src/routes/user/index");
const HOD = require("./src/routes/HOD/index");
const hod = require("./src/routes/HOD/hodlogin.route");
const authMiddleware = require("./src/middleware/auth.middleware");
const publicRoutes = require("./src/routes/public.routes");

const app = express();

// PORT FIX (Render compatible)
const PORT = process.env.PORT || 7000;

//  DB CONNECT
connectDB();

//  MIDDLEWARE
app.use(express.json());


app.use(cors());

//  TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

//  PUBLIC ROUTES
app.use("/auth", auth);
app.use("/public", publicRoutes);
app.use("/hod", hod);

//  PROTECTED ROUTES
app.use(authMiddleware);

app.use("/user", user);
app.use("/HOD", hodmiddleware, HOD);
app.use("/admin", adminmiddleware, adminRoutes);

//  START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});