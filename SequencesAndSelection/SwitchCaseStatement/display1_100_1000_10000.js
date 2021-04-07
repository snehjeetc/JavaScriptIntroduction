const input = require("readline-sync");

let number = input.question("Enter the number from the set [1, 10, 100, 1000, 10000]: ");
number = parseInt(number);
switch(number){
    case 1  : console.log("One");
              break;
    case 10 : console.log("Ten");
              break;
    case 100: console.log("Hundred");
              break;
    case 1000: console.log("Thousand");
              break;
    case 10000: console.log("Ten Thousand");
              break;
    default : console.log("Invalid input");
}