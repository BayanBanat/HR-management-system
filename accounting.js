
'use srtict';



let retreivedArr = localStorage.getItem('name');
let objArr = JSON.parse(retreivedArr);





const departments = {};

for (const obj of objArr) {
  if (!departments[obj.department]) {
    departments[obj.department] = {numEmployees: 1, totalSalary: obj.salary};
  } else {
    departments[obj.department].numEmployees++;
    departments[obj.department].totalSalary += obj.salary;
  }
}


let totalSalary = 0;
let totalNumEmployees = 0;

const tableBody = document.getElementById("table-body");

for (const [department, data] of Object.entries(departments)) {
  
    if (!department) {
      continue;
    }
    const avgSalary = data.totalSalary / data.numEmployees;
   
  
 
  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = department;
  row.appendChild(td1);
  const td2 = document.createElement("td");
  td2.textContent = data.numEmployees;
  row.appendChild(td2);
  const td3 = document.createElement("td");
  td3.textContent = data.totalSalary;
  row.appendChild(td3);
  const td4 = document.createElement("td");
  td4.textContent = avgSalary.toFixed(1);
  row.appendChild(td4);
  tableBody.appendChild(row);
  totalSalary += data.totalSalary;
  totalNumEmployees += data.numEmployees;
}

const tableFooter = document.getElementById("table-footer");

const td5 = document.createElement("td");
td5.textContent = "Total";
tableFooter.appendChild(td5);

const td6 = document.createElement("td");
td6.textContent = totalNumEmployees;
tableFooter.appendChild(td6);

const td7 = document.createElement("td");
td7.textContent = totalSalary;
tableFooter.appendChild(td7);

const td8 = document.createElement("td");
const avgSalary = totalSalary / totalNumEmployees;
td8.textContent = avgSalary;
tableFooter.appendChild(td8);












