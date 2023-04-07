'use strict'
let allEmployee =[];
 let form = document.getElementById("form");
 let divEl1 = document.getElementById("div1");
 

function Employee(EmployeeID, FullName, Department, Level, ImageURL) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;
    allEmployee.push(this)
    
};
const Employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/ghazi.png");
const Employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "./assets/lana.png");
const Employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/tamara.png");
const Employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","./assets/safi.png");
const Employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior","./assets/omar.png");
const Employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior","./assets/rana.png");
const Employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./assets/hadi.png");

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

let newEmployee=new Employee(1111,FullName,Department,Level,ImageURL)

newEmployee.rennder()
}


