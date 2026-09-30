//Example 1//

console.log('This is my first program')
console.log('Hello John my monthly salary is 36000')

//Example 2//

const num1=5;
const num2=7;

const sum = num1 + num2;

console.log('The sum of two number is:' +sum);

//Example 3//

const prompt = require('prompt-sync')();
console.log('starting');
const name = prompt('Enter your name: ');
console.log("Hello " +name);
const num= parseInt(prompt("Enter a number"));

if(num>0){
    console.log('The number is positive.');
}

else if(num<0){
    console.log('The number is negative.');
}

else{
    console.log('the number is Zero.');
}