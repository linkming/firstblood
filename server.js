const express = require("express");
const Dblink = require("./img/db.js");
const db = new Dblink("hoping");
const bodyParser = require("body-parser")
const http = express();
http.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
	next();
})
http.use(bodyParser.urlencoded({extended:false}));
http.post("/add",(req,res)=>{
	console.log(req.body)
	db.count("list",{content:req.body.content},(err,nums)=>{
		if (nums == 0) {
			db.insertOne("list",req.body,(err,data1)=>{
			})
		}else{
			res.send("以重复")
		}
	})
})
http.get("/hop",(req,res)=>{
	db.find("list",{},(err,data)=>{
		res.send(data)
	})
})
http.get("/del",(req,res)=>{
	db.deleteOne("list",req.query.id,(err,data)=>{
	})
})
http.get("/tag",(req,res)=>{
	console.log(req.query._id)
	db.updateById("list",req.query._id,{suc:req.query.suc},(err,data)=>{
		console.log(data.result)
		res.send(data)
	})
})
http.listen(8080,()=>{
	console.log("server is running")
})
