'use srtict';
const renderArray=[];
function EmployeeInfo(employeeID, fullName, department, level, image) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = this.netsalary(this.level);
    renderArray.push(this);

}
 EmployeeInfo.prototype.rendering = function () {
    
    document.write(`<h1> ${this.employeeID}</h1>`);
    document.write(`<h1> ${this.fullName}</h1>`);
    document.write(`<h1> ${this.department}</h1>`);
    document.write(`<h1> ${this.level}</h1>`);
    document.write(`<h1> ${this.image}</h1>`);
    document.write(`<h1> ${this.salary}</h1>`);
    // document.write(`<h1> ${this.renderArray}</h1>`);
   
}



EmployeeInfo.prototype.netsalary = function (level) {

    let min;
    let max;
    if (level=="Senior") {
     min=1500;
     max=2000;

 
 }else if(level=="Mid-Senior"){
     min=1000;
     max=1500;
 }
 else if (level=="Junior"){
     min=500;
     max=1000;

 }
  let rangeSalary =Math.floor(Math.random() * (max - min)) + min
  let finalSalary=rangeSalary-(rangeSalary*0.075)
  return finalSalary;
    
    
}




EmployeeInfo.prototype.render = function () {

    return (this.fullName+ this.salary)
    

}

let firstEmployee = new EmployeeInfo(1000, "Ghazi Samer", "Administration", "Senior");
let secondEmployee = new EmployeeInfo(1001, "Lana Ali", "Finance", "Senior");
let thirdEmployee = new EmployeeInfo(1002, "Tamara Ayoub", "Marketing", "Senior");
let forthEmployee = new EmployeeInfo(1003, "Safi Walid", "Administration", "Mid-Senior");
let fifthEmployee = new EmployeeInfo(1004, "Omar Zaid", "Development", "Senior");
let sixthEmployee = new EmployeeInfo(1005, "Rana Saleh", "Development", "Junior");
let seventhEmployee = new EmployeeInfo(1006, "Hadi Ahmad", "Finance", "Mid-Senior");


firstEmployee.rendering();
secondEmployee.rendering();
thirdEmployee.rendering();
forthEmployee.rendering();
fifthEmployee.rendering();
sixthEmployee.rendering();
seventhEmployee.rendering();

// console.log(seventhEmployee)
// console.log(firstEmployee.render());


