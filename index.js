var express = require("express");
var app = express();
var mongoose= require("mongoose");
var EmpControllers=require("./controllers/empControllers");
 const bodyparser = require('body-parser')
 app.use(bodyparser.urlencoded({ extended: true }))
 app.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/employee").then(()=>{console.log("App Run On 8000")}) ;
app.set("view engine", "ejs");
app.use(express.static('public'))


app.get("/", EmpControllers.homeDisplay);
app.get("/about", EmpControllers.aboutDisplay);
app.get("/insert", EmpControllers.insertDisplay);
app.post("/empsave", EmpControllers.empdataSave);
app.get("/display", EmpControllers.dataDisplay);
app.get("/search", EmpControllers.empdataSearch);
app.post("/datasearch", EmpControllers.getSearchData);

app.get("/update", EmpControllers.recordUpdate);

app.get("/delete/:id", EmpControllers.dataDelete);

app.get("/edit/:id", EmpControllers.recordEdit);

app.post("/editsave", EmpControllers.editdataSave);

app.listen(8000);
