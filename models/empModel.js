var mongoose= require("mongoose");

var empSchema= new mongoose.Schema({

    employeeNo: {
        type: String,
        required:true,
    },
    employeeName:String,
    employeeCity:String,
    employeeSalary:Number
});

module.exports= mongoose.model("employee", empSchema);