var EmpModel= require("../models/empModel");
const homeDisplay= async (req, res)=> {
     try {
         res.render("index");      
     } catch (error) {        
        console.log(error);
     }
}
const aboutDisplay=async (req, res)=>{
    try {
        res.render("about");
    } catch (error) {
        console.log(error);
    }
}
const insertDisplay=async (req, res)=>{
    try {       
        res.render("insert", {save:false});

    } catch (error) {
    }
} 
const empdataSave=async(req, res)=>{
    let myempno=req.body.empno;
    let myempname= req.body.empname;
    let myempcity=req.body.empcity;
    let myempsalary= req.body.empsalary;  
    const mydata= new  EmpModel({
        employeeNo:myempno,
        employeeName: myempname,
        employeeCity:myempcity,
        employeeSalary:myempsalary
    });
    mydata.save();
    res.render("insert", {save:true});
}

const  dataDisplay=async(req, res)=>{
    EmpModel.find().then((data)=>{

        res.render("display",{mydata:data} );
    })  
}
const empdataSearch=async(req, res)=>{
         res.render("search", {mystatus:false});
}
const getSearchData=async(req, res)=>{
      let eno = req.body.empno;
      
      EmpModel.find({employeeNo:eno}).then((data)=>{
         res.render("search", {myData:data, mystatus:true});
      });    
}
const recordUpdate=async(req, res)=>{
    EmpModel.find().then((data)=>{
        res.render("update", {mydata:data});
    });
}
const dataDelete=async(req, res)=>{      
    var id = req.params.id;
    EmpModel.findByIdAndDelete(id).then(()=>{
        EmpModel.find().then((data)=>{
            res.render("update", {mydata:data});
        });
    })
}


const recordEdit=async(req, res)=>{
    var id = req.params.id;
    EmpModel.findById(id).then((data)=>{
        
        res.render("edit", {mydata:data});
    })

}

const editdataSave=async(req, res)=>{
    let id=req.body.id;
    let empno=req.body.empno;
    let empname=req.body.empname;
    let city=req.body.city;
    let salary=req.body.salary;

    let mydata={employeeNo:empno, employeeName:empname, employeeCity:city, employeeSalary:salary };

    EmpModel.findByIdAndUpdate(id, mydata).then(()=>{
          
        EmpModel.find().then((data)=>{
            res.render("update", {mydata:data});
        });
        
    })

}

module.exports={
    homeDisplay,
    aboutDisplay,
    insertDisplay,
    empdataSave,
    dataDisplay,
    empdataSearch,
    getSearchData,
    recordUpdate,
    dataDelete,
    recordEdit,
    editdataSave,
}