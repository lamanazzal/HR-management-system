'use strict'
function Employee(EmployeeID, FullName, Department, Level, ImageURL) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;

};
Employee.prototype.CalculateSalary = function () {

    if (this.Level == "Senior")
        this.Salary = getRndInteger(1500, 2000);
    else if (this.Level == "Mid-Senior")
        this.Salary = getRndInteger(1000, 1500);
    else if (this.Level == "Junior")
        this.Salary = getRndInteger(500, 1000);

    this.Salary = netSalary(this.Salary);

}
Employee.prototype.rennder = function () {
    document.write("employee name ="+ this.FullName + " & Employee Salery ="+ this.Salary);


};

const Employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", null);
const Employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", null);
const Employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", null);
const Employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior",null);
const Employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior",null);
const Employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior",null);
const Employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior",null);
console.log(Employee1.rennder());

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function netSalary(Salary) {
    return Salary - (Salary * 0.075)
}
let allEmployee =[Employee1,Employee2,Employee3,Employee4,Employee5,Employee6,Employee7];
console.log(allEmployee);