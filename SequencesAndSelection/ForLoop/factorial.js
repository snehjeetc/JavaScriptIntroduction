const input = require("readline-sync");

function factorial(num){
    let fact = 1;
    for(; num > 0; num--)
        fact *= num;
    return fact;
}

let number = parseInt(input.question("Enter the number : "));
console.log(number + "!=" + factorial(number));