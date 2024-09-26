const express = require("express");
const cors = require("cors");
const admin = require("./routes/admin");
const employer = require("./routes/employer");
const students = require("./routes/students");
const users = require("./routes/users");



const  app = express();
const connect = require("./db");
const port = 4001;
connect.connect();



app.use(cors({
    origin: "*",
}));
app.use(express.json());3

app.use("/admin", admin.route);
app.use("/employer", employer.route);
app.use("/students", students.route);
app.use("/users", users.route);

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`);
});