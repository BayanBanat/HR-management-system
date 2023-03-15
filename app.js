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

EmployeeInfo.prototype.renderTable=function(){
    let tableEl=document.getElementById("table")
    // let tableEl2=document.getElementById("table2")
    let tbodyEl=document.getElementById("body")
    let tdEl4=document.getElementById("1")
    let tdEl5=document.getElementById("2")
    let tdEl6=document.getElementById("3")
    let tdEl7=document.getElementById("4")

    let trEl=document.createElement("tr")
    tbodyEl.appendChild(trEl);
    let tdEl=document.createElement("td")
    tdEl.textContent=this.department
    trEl.appendChild(tdEl)

    let tdEl1=document.createElement("td")
    tdEl1.textContent= this.departmentNumber(this.department)//numbers of employees
    trEl.appendChild(tdEl1)

    let tdEl2=document.createElement("td")
    tdEl2.textContent=this.totalSalary(this.department) //average
    trEl.appendChild(tdEl2)

    let tdEl3=document.createElement("td")
    tdEl3.textContent=this.averagelSalary(this.department) //total
    trEl.appendChild(tdEl3)


    tdEl4.textContent="Total"
    tdEl5.textContent=this.totalNumber(this.department)
    tdEl6.textContent=this.totalSal(this.department)
    tdEl7.textContent=this.totalAverage(this.department)

    

    
    


    // for(let i=0;i<allEmployees.length;i++){

    // }
}
let depNum;
EmployeeInfo.prototype.departmentNumber = function (department) {

    
   
    if (department=="Administration") {
    depNum=2;


 }else if(department=="Finance"){
     depNum=2;
 }
 else if (department=="Development"){
     depNum=2;


 }
 else if (department=="Marketing"){
    depNum=1;
    

}
  
  return depNum;


}
EmployeeInfo.prototype.totalNumber=function(department) {
    let total = 0;
    for (let i = 0; i < department.length; i++) {
      total += depNum;
    }
    return total;
  }
  
  EmployeeInfo.prototype.totalSal=function(department) {
    let total = 0;
    for (let i = 0; i < department.length; i++) {
      total += totalSalary;
    }
    return total;
  }

  EmployeeInfo.prototype.totalAverage=function(department) {
    let total = 0;
    for (let i = 0; i < department.length; i++) {
      total +=averageSalary;
    }
    return total;
  }

let totalSalary;
EmployeeInfo.prototype.totalSalary = function (department) {

    

    let adminsSalary=0;
    let financeSalary=0;
    let developSalary=0;
    let markitSalary=0;
   
    if (department=="Administration") {
        totalSalary= adminsSalary+this.salary;
    


 }else if(department=="Finance"){
    totalSalary= financeSalary+this.salary;
 }
 else if (department=="Development"){
    totalSalary=developSalary+this.salary;


 }
 else if (department=="Marketing"){
    totalSalary= markitSalary+this.salary;
    

}
  
  return totalSalary;


}

let averageSalary;
EmployeeInfo.prototype.averagelSalary = function (department) {

    

    
   
    if (department=="Administration") {
        averageSalary= totalSalary / depNum;
    


 }else if(department=="Finance"){
    averageSalary= totalSalary / depNum;
 }
 else if (department=="Development"){
    averageSalary= totalSalary / depNum;


 }
 else if (department=="Marketing"){
    averageSalary= totalSalary / depNum;
    

}
  
  return averageSalary;


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



calling(allEmployees);

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
        allEmployees[i].renderTable();
        // allEmployees[i].departmentNumber();


    }
}

// export{EmployeeInfo,renderTable,departmentNumber,totalNumber,totalSal,totalAverage,totalSalary,averagelSalary,saveData,submitHandler,grtData,calling}










