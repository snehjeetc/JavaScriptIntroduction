const input = require("readline-sync");


let number1 = input.question("Enter the first number: ");
let number2 = input.question("Enter the seconde number: ");
let number3 = input.question("Enter the third number: " );

/*
let number1 = 3;
let number2 = 4;
let number3 = 5;
*/

number1 = parseInt(number1);
number2 = parseInt(number2);
number3 = parseInt(number3);

console.log("Number1 : " + number1 + " Number2 : " + number2 + " Number3 : " + number3);

let result1 = number1 + number2 * number3;
let result2 = number1%number2 + number3;
let result3 = number3 + number1 / number2;
let result4 = number1 * number2 + number3;

console.log("Result1: " + result1 + " Result2: " + result2 + 
            " Result3: " + result3 + " Result4 : " + result4);

let max = result1;
let min = result1;

if(max < result2)
    max = result2;
if(max < result3)
    max = result3;
if(max < result4)
    max = result4;

if(min > result2)
    min = result2;
if(min > result3)   
    min = result3;
if(min > result4)
    min = result4;

console.log("Max = " + max + " Min = " + min);
