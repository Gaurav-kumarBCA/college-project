require("dotenv").config();
const express = require("express");
// const cors = require("cors")
const { connectDB } = require("./src/config/db");
const cors=require("cors")
const auth = require("./src/routes/auth.route");
const adminRoutes = require("./src/routes/admin/index");
const adminmiddleware = require("./src/middleware/admin.middleware")
const hodmiddleware = require("./src/middleware/HOD.middleware")
const user = require("./src/routes/user/index");
const HOD = require("./src/routes/HOD/index");
const authMiddleware = require("./src/middleware/auth.middleware");
const public=require("./src/routes/public.routes");
const app = express();

const PORT = 7000;

connectDB();

// app.use(cors())

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hellow world");
});

app.use("/auth", auth);
app.use("/public",public);

app.use(authMiddleware);

app.use("/user", user);

app.use("/HOD", hodmiddleware, HOD);

app.use("/admin", adminmiddleware, adminRoutes)

app.listen(PORT,() => {
  console.log(`server is running on http://localhost:${PORT}`);
});
