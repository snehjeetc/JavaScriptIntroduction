const input = require("readline-sync");

let number = input.question("Enter the number from the set [1, 10, 100, 1000, 10000]: ");

if(number == 1)
    console.log("One");
else if(number == 10)
    console.log("Ten");
else if(number == 100)
    console.log("Hundred");
else if(number == 1000)
    console.log("Thousand");
else if(number == 10000)
    console.log("Ten thousand");
else
    console.log("Invalid input");