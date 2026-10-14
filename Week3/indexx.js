function EmployeeInfo(Name, Salary){
    console.log("Welcome " +Name + " Your Salary is: " +Salary);
}
//Display Current Date and Time

const currentDateTime = new Date();
console.log("This is my first program");
console.log("Program run on: " +currentDateTime.toLocaleString());

var empName = "Sidhu";
var empSalary = 50000;

//Calling the function

EmployeeInfo(empName, empSalary);

//Add this for Second Exercise

const EmpSkills= (Skills, Name, Labgrp)=> {
    console.log("Student ID: " +Name+ " Expert in: "+Skills);
    console.log("Lab Group:" +Labgrp);
}

EmpSkills("Java Script", "3000752","7");