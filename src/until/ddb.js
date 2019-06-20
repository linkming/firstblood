var mongodb =require("mongodb");
var MongoClient =mongodb.MongoClient;
var dburl ="mongodb://localhost:27017";

module.exports.insertOne =function(obj,res){
	MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){
		if(err){
			console.log("连接数据库失败",err);
		}else{
			console.log("连接数据库成功");
			var dbase =db.db("jd");
			dbase.collection("dbg").insertOne(obj,function(err,result){
				if(err){
					console.log("添加数据失败",err);
					db.close();
				}else{
					console.log("添加数据成功");
					res.send(result.result);
					db.close();
				}
			})
		}
	})
}

module.exports.find =function(obj,res){
	MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){
		if(err){
			console.log("连接数据库失败",err);
		}else{
			console.log("连接数据库成功");
			var dbase =db.db("jd");
			dbase.collection("db").find(obj).sort({time:-1}).toArray(function(err,result){
				if(err){
					console.log("查找数据失败",err);
					db.close();
				}else{
					console.log("查找数据成功");
					res.send(result);
					db.close();
				}
			})
		}
	})
}
module.exports.find1 =function(obj,res){
	MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){
		if(err){
			console.log("连接数据库失败",err);
		}else{
			console.log("连接数据库成功");
			var dbase =db.db("jd");
			dbase.collection("dbg").find(obj).sort({time:-1}).toArray(function(err,result){
				if(err){
					console.log("查找数据失败",err);
					db.close();
				}else{
					console.log("查找数据成功");
					res.send(result);
					db.close();
				}
			})
		}
	})
}

module.exports.deleteOne =function(obj,res){
	MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){
		if(err){
			console.log("连接数据库失败",err);
		}else{
			let whereobj ={
				name :obj.name
			}
			console.log("连接数据库成功");
			console.log("whereobj：",whereobj);
			var dbase =db.db("jd");
			dbase.collection("dbg").deleteOne(whereobj,function(err,result){
				if(err){
					console.log("删除数据失败",err);
					db.close();
				}else{
					console.log("删除数据成功");
					console.log(result.result);
					res.send(result.result);
					db.close();
				}
			})
		}
	})
}
module.exports.updateOne =function(obj,res){
	MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){
		if(err){
			console.log("连接数据库失败",err);
		}else{
			let whereobj ={
				name:obj.name
			}
			let updObj={};
			for(o in obj){
				if(o!="id"){
					updObj[o]=obj[o];
				}
			}
			console.log("whereobj:",whereobj);
			console.log("updObj:",updObj);
			console.log("连接数据库成功");
			var dbase =db.db("jd");
			dbase.collection("dbg").updateOne(whereobj,{$set:updObj},function(err,result){
				if(err){
					console.log("修改数据失败",err);
					db.close();
				}else{
					console.log("修改数据成功");
					res.send(result.result);
					console.log("result.result",result.result);
					db.close();
				}
			})
		}
	})
}
