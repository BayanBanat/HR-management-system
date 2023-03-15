'use srtict';

var allEmployees = [];
function EmployeeInfo( employeeID,fullName, department, level, image) {

    this.employeeID = uniqueIdNumber(this.employeeID);
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = this.netsalary(this.level);
    allEmployees.push(this);

}


let form = document.getElementById("form");

let card=document.getElementById("Card")
let tableEl=document.getElementById("table")
let tbodyEl=document.getElementById("body")
let tdEl4=document.getElementById("1")
let tdEl5=document.getElementById("2")
let tdEl6=document.getElementById("3")
let tdEl7=document.getElementById("4")






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
    const div=document.createElement("div")
    div.innerHTML=`
    <div class="card">
    <img src="${this.image}"<br>
    <p> Name: ${this.fullName} - ID: ${this.employeeID}</p> <br>
    <p>Departement: ${this.department} - Level: ${this.level}</p><br>
    <p>Salary: ${this.salary}</p>
    </div>`;
    card.appendChild(div);

    

   


}






EmployeeInfo.prototype.idNumber = function(){
    this.employeeID=uniqueIdNumber();
}





//decleration

let Ghazi = new EmployeeInfo( 1000,"Ghazi Samer", "Administration", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true");
let Lana = new EmployeeInfo(1001, "Lana Ali", "Finance", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
let Tamara = new EmployeeInfo(1002, "Tamara Ayoub", "Marketing", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
let Safi = new EmployeeInfo(1003, "Safi Walid", "Administration", "Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
let Omar = new EmployeeInfo(1004, "Omar Zaid", "Development", "Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
let Rana = new EmployeeInfo(1005, "Rana Saleh", "Development", "Junior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
let Hadi = new EmployeeInfo(1006, "Hadi Ahmad", "Finance", "Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");



// calling(allEmployees);

//


form.addEventListener("submit",submitHandler);

function submitHandler(event){

    // alert("hi");
    event.preventDefault();
   

    let Name=event.target.fullName.value;
    let Department=event.target.department.value;
    let level=event.target.Level.value;
    let Emage=event.target.img.value;
    let newCard = new EmployeeInfo(1000,Name,Department,level,Emage);

    console.log(allEmployees)

  newCard.render();
  saveData(allEmployees);


}



//functins

function saveData(data){
    let stringArr=JSON.stringify(data);
    localStorage.setItem('name',stringArr);
}

function grtData(){
    let retreivedArr=localStorage.getItem('name');
    let objArr=JSON.parse(retreivedArr);
    if(objArr!=null){
      allEmployees=[];
        for(i=0;i<objArr.length;i++){
        new EmployeeInfo(objArr[i].employeeID,objArr[i].fullName,objArr[i].department,objArr[i].level,objArr[i].image) 
    }
    }
    console.log(allEmployees);
    
    calling(allEmployees);
}
grtData();



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












