const input = require("readline-sync");

let arrayOfRepeatedDigits = new Array();
let lowerLimit;
let upperLimit;

function takeRange(){
    lowerLimit = parseInt(input.question("Enter the lower limit of the range: "));
    upperLimit = parseInt(input.question("Enter the upper limit of the range: "));
}

function storeRepeatingNumbersInTheArray(){
    for(k = lowerLimit; k <= upperLimit; k++){
        if(k % 11 == 0)
            arrayOfRepeatedDigits.push(k);
    }
}

takeRange();
storeRepeatingNumbersInTheArray();
console.log("The repeated two digits numbers are : ");
console.log(arrayOfRepeatedDigits);