'use srtict';

const allEmployees = [];
function EmployeeInfo( employeeID,fullName, department, level, image) {

    this.employeeID = uniqueIdNumber(this.employeeID);
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = this.netsalary(this.level);
    allEmployees.push(this);

}

let sectionEl = document.getElementById("sec1");



//prototype functions


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

    let imgEl=document.createElement('img')
    imgEl.src=this.image;
    let parEl=document.createElement('p') 
    parEl.textContent=` Name: ${this.fullName} - ID: ${this.employeeID}`
    let paEl=document.createElement('p')
    paEl.textContent=`Departement: ${this.department} - Level: ${this.level}`
    let pEl=document.createElement('p')
    pEl.textContent= `${this.salary}`
    
    sectionEl.appendChild(imgEl);
    sectionEl.appendChild(parEl);
    sectionEl.appendChild(paEl);
    sectionEl.appendChild(pEl);
    

    imgEl.style="width:300px ;border-radius:20px";
    // sectionEl.style=" "


}
EmployeeInfo.prototype.idNumber = function(){
    this.employeeID=uniqueIdNumber(this.employeeID);
}





//decleration

let Ghazi = new EmployeeInfo( 1000,"Ghazi Samer", "Administration", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true");
let Lana = new EmployeeInfo(1001, "Lana Ali", "Finance", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
let Tamara = new EmployeeInfo(1002, "Tamara Ayoub", "Marketing", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
let Safi = new EmployeeInfo(1003, "Safi Walid", "Administration", "Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
let Omar = new EmployeeInfo(1004, "Omar Zaid", "Development", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
let Rana = new EmployeeInfo(1005, "Rana Saleh", "Development", "Junior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
let Hadi = new EmployeeInfo(1006, "Hadi Ahmad", "Finance", "Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");



calling(allEmployees);

//
let body = document.getElementsByTagName("body")
let form = document.getElementById("form");
let btn = document.getElementById("btn");

form.addEventListener("submit",submitHandler);

function submitHandler(event){

    // alert("hi");
    event.preventDefault();
   
    let Name=event.target.fullName.value;
    let Department=event.target.department;
    let level=event.target.level;
    let Emage=event.target.img.value;
    let newCard = new EmployeeInfo(Name, Emage);
    console.log(Name,Emage,Department);


    let imagEl=document.createElement('img')
    imagEl.src=Emage;
    let parrEl=document.createElement('p') 
    parrEl.textContent=` Name: ${Name}`
    let parr2El=document.createElement('p')
    parr2El.textContent=`Departement: ${Department} - Level: ${level}`
    
    

    
    sectionEl.appendChild(imagEl);
    sectionEl.appendChild(parrEl);
    sectionEl.appendChild(parr2El);

//   EmployeeInfo[i].render();


}



//functins


function uniqueIdNumber() {

    let usedIds = new Set(); 
    while (true) {
      let idNum = Math.floor(Math.random() * 9000) + 1000; 
      if (!usedIds.has(idNum)) { 
        usedIds.add(idNum); 
        return idNum;
      }
    }
}


function calling(allEmployees) {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].render();
        allEmployees[i].netsalary();
        allEmployees[i].idNumber();


    }
}






