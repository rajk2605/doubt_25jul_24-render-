const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res)=>{
	const url = "mongodb+srv://rajkhairnar26:y2zGPJ617brRVsq1@cluster0.yfledem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("doubtapp");
	const coll = db.collection("student");
	const record = {"name":req.body.name, "phone":req.body.phone, "email":req.body.email, "doubt":req.body.doubt};
	coll.insertOne(record)
	.then(result=> res.send(result))
	.catch(error=> res.send(error));
});

app.listen(9000, ()=> {console.log("Sever ready @ 9000");});