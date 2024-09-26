const express = require("express");
const cors = require("cors");
const  app = express();
const connect = require("./db");
const users = require("./routes/users");
const students = require("./routes/students");
const port = 4001;
connect.connect();


app.use(cors({
    origin: "*",
}));
app.use(express.json());


app.use("/", ()=>{console.log("Hello World")});
app.use("/users", users.route);
app.use("/students", students.route);

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`);
});