
'use srtict';



let retreivedArr = localStorage.getItem('name');
let objArr = JSON.parse(retreivedArr);
if(objArr !=null){

}
console.log(objArr[0].department);








let tableEl = document.getElementById("table")
let tbodyEl = document.getElementById("body")
let tdEl4 = document.getElementById("1")
let tdEl5 = document.getElementById("2")
let tdEl6 = document.getElementById("3")
let tdEl7 = document.getElementById("4")







renderTable  ();


function renderTable  () {
  let tableEl = document.getElementById("table")
  let tbodyEl = document.getElementById("body")
  let tdEl4 = document.getElementById("1")
  let tdEl5 = document.getElementById("2")
  let tdEl6 = document.getElementById("3")
  let tdEl7 = document.getElementById("4")
  if (objArr !=null){
for ( i = 0; i < 4; i++) {
  
  let trEl = document.createElement("tr")
  tbodyEl.appendChild(trEl);
  let tdEl = document.createElement("td")
  tdEl.textContent = objArr[i].department
  trEl.appendChild(tdEl)

  let tdEl1 = document.createElement("td")
  tdEl1.textContent =departmentNumber(); //numbers of employees
  trEl.appendChild(tdEl1)

  let tdEl2 = document.createElement("td")
  tdEl2.textContent =totalSalaryY(objArr[i].department) //totalsalary
  trEl.appendChild(tdEl2)

  let tdEl3 = document.createElement("td")
  tdEl3.textContent = averagelSalary() //average
  trEl.appendChild(tdEl3)


  tdEl4.textContent = "Total"
  tdEl5.textContent = totalNumber()
  tdEl6.textContent = totalSal()
  tdEl7.textContent = totalAverage()
}
  }

}

function departmentNumber () {
let depNum;
  

// for ()

  if (objArr[i].department == "Administration") {
    depNum=4;


  } else if (objArr[i].department == "Finance") {
    depNum=6;
  }
  else if (objArr[i].department == "Development") {
    depNum=2;


  }
  else if (objArr[i].department == "Marketing") {
    depNum = 1;


  }


  return depNum;


}
// function departmentNumber () {


//   let depNum;
//   let depNumA=0;
//   let depNumD=0;
//   let depNumM=0;
//   let depNumF=0;
  
//   for(let i=0;i<objArr.length;i++){
  
//     if (objArr[i].department == "Administration") {
//       depNum= depNumA+=1;
      
  
  
//     } else if (objArr[i].department == "Finance") {
//       depNum= depNumF+=1;
//     }
//     else if (objArr[i].department == "Development") {
//       depNum= depNumD+=1;
  
  
//     }
//     else if (objArr[i].department == "Marketing") {
//       depNum= depNumM +=1;
  
  
//     }
  
//   return depNum;
    
  
//   }
//   }
function totalNumber  () {
  let total = 0;
  for (let i = 0; i < objArr.length; i++) {
    total += departmentNumber ();
  }
  return total;
}

function totalSal  () {
  let total = 0;
  for (let i = 0; i < objArr.length; i++) {
    total += totalSalaryY();
  }
  return total;
}
totalAverage  ()
function totalAverage  () {
  let total = 0;
  for (let i = 0; i < objArr.length; i++) {
    total += averagelSalary  ();
  }
  return total;
}


function totalSalaryY  () {
let totalSalary;


  let adminsSalary = 0;
  let financeSalary = 0;
  let developSalary = 0;
  let markitSalary = 0;

  if (objArr[i].department == "Administration") {
    totalSalary = adminsSalary +objArr[i].salary;



  } else if (objArr[i].department == "Finance") {
    totalSalary = adminsSalary +objArr[i].salary;
  }
  else if (objArr[i].department == "Development") {
    totalSalary = adminsSalary +objArr[i].salary;


  }
  else if (objArr[i].department == "Marketing") {
    totalSalary = adminsSalary +objArr[i].salary;


  }

  return totalSalary;
 


}




function averagelSalary  () {

let averageSalary;



  if (objArr[i].department == "Administration") {
    averageSalary = totalSalaryY() / departmentNumber();



  } else if (objArr[i].department == "Finance") {
    averageSalary = totalSalaryY() / departmentNumber();
  }
  else if (objArr[i].department == "Development") {
    averageSalary = totalSalaryY() / departmentNumber();


  }
  else if (objArr[i].department == "Marketing") {
    averageSalary = totalSalaryY() / departmentNumber();


  }

  return averageSalary;


}






