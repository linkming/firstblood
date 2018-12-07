const express = require("express");
const http = express();
const fs = require("fs");
const ejs = require("ejs");
const bodyParser = require("body-parser");//引入bodyParser模块！
http.use((req,res,next)=>{
	//设置CROS跨域
	res.header("Access-Control-Allow-Origin","*");
	next();
})
//http.use(bodyParser.urlencoded({extended:false}))//获取post请求发送来的数据，一般放在所有中间件最后
//http.get("/api",(req,res)=>{
//	fs.readFile("./ejs.json","utf-8",(error,data)=>{
//		fs.readFile("./html/goodsType.html","utf-8",(error,data1)=>{
//			console.log("caola")
//			data = JSON.parse(data);
//			res.send(ejs.render(data1,{arr:data}));
//		})
//	})
//})
//http.post("/add",(req,res)=>{
//	console.log(req.params)
//	console.log(req.params.id)
//	console.log(res)
//	res.send("添加成功")
//})
//http.get("/items/:id",(req,res)=>{
//	let id = req.params.id;
//	console.log(id)
//	fs.readFile("./html/goodsDetail.html","utf-8",(error,data2)=>{
//		fs.readFile("./ejs.json","utf-8",(error,data)=>{
//			data = JSON.parse(data);
//			let obj = {};
//			for(let i = 0 ; i < data.length ; i++){
//				if(data[i].id == id){
//					obj = data[i];
//					break;
//				}
//			}
//			res.send(ejs.render(data2,obj));
//		})
//	})
//})
http.listen(8080,()=>{//监听服务器运行状态
	console.log("server is running")
})
