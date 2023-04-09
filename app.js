'use strict'
let allEmployee =[];
 let form = document.getElementById("form");
 let divEl1 = document.getElementById("div1");
 let EmployeeID = 1000;

function Employee( FullName, Department, Level, ImageURL) {
    this.EmployeeID =randomId();
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;
   
    allEmployee.push(this)
    
};
const Employee1 = new Employee( "Ghazi Samer", "Administration", "Senior", "./assets/ghazi.png");
const Employee2 = new Employee("Lana Ali", "Finance", "Senior", "./assets/lana.png");
const Employee3 = new Employee( "Tamara Ayoub", "Marketing", "Senior", "./assets/tamara.png");
const Employee4 = new Employee( "Safi Walid", "Administration", "Mid-Senior","./assets/safi.png");
const Employee5 = new Employee( "Omar Zaid", "Development", "Senior","./assets/omar.png");
const Employee6 = new Employee( "Rana Saleh", "Development", "Junior","./assets/rana.png");
const Employee7 = new Employee( "Hadi Ahmad", "Finance", "Mid-Senior","./assets/hadi.png");
 function randomId () {
    EmployeeID++
   return EmployeeID
}
Employee.prototype.CalculateSalary = function () {

    if (this.Level =="Senior"){

        this.Salary = getRndInteger(1500, 2000);
    }
    else if (this.Level == "Mid-Senior"){

        this.Salary = getRndInteger(1000, 1500);
    }
    else if (this.Level == "Junior"){

        this.Salary = getRndInteger(500, 1000);
    }
    this.Salary = netSalary(this.Salary);
    console.log(this.Salary);
    
return this.Salary
}

Employee.prototype.rennder = function () {

    
    let imgEl = document.createElement("img")
    imgEl.src = this.ImageURL
    divEl1.appendChild(imgEl);
    let h2El1 = document.createElement('h2');
    h2El1.textContent = ` ID : ${this.EmployeeID}`
    divEl1.appendChild(h2El1)

    let h3El = document.createElement('h3');
   h3El.textContent = ` Name : ${this.FullName}`
    divEl1.appendChild(h3El)

    let h2El = document.createElement('h2');
    h2El.textContent = ` Department : ${this.Department}`
    divEl1.appendChild(h2El)

    let h1El = document.createElement('h1');
    h1El.textContent = ` Livel : ${this.Level}`
    divEl1.appendChild(h1El)
}


for (let index = 0; index < allEmployee.length; index++) {

    allEmployee[index].rennder()

}
   

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function netSalary(Salary) {
    return Salary - (Salary * 0.075)
}


form.addEventListener("submit",eventHandler);

function eventHandler (event){
event.preventDefault();
let FullName=(event.target.fullname.value);
let Department=(event.target.dep.value);
let Level=(event.target.level.value);
let ImageURL=(event.target.img.value);

console.log(FullName,Department,Level,ImageURL)

let newEmployee=new Employee(FullName,Department,Level,ImageURL)
newEmployee.rennder()

saveData(allEmployee);
}



function renderAll(){
    for (let i =7;i< allEmployee.length; i++){
      allEmployee[i].rennder();
      console.log(allEmployee[i]);
      //allEmployee[i].renderTable()
      } 
    }
function saveData(data){
    let stringArr= JSON.stringify(data);
    localStorage.setItem('employee', stringArr);
  }
 
  function getData(){
    let retrievedArr = localStorage.getItem('employee');
    // console.log(retrievedArr) //string
    let objArray = JSON.parse(retrievedArr);
    console.log("after getting from LS ",objArray) 
    if(objArray != null){
    for (let i = 7; i < objArray.length; i++) {
        new Employee( objArray[i].FullName, objArray[i].Department, objArray[i].Level ,objArray[i].ImageURL)
        
      }
     } 
     renderAll();
     }  
      getData();



 