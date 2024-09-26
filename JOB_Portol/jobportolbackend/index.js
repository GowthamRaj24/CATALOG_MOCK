const express = require("express");
const cors = require("cors");
const  app = express();
const connect = require("./db");

const port = 4001;
connect.connect();

app.use(cors({
    origin: "*",
}));
app.use(express.json());

app.use("/", ()=>{console.log("Hello World")});

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`);
});