const input = require("readline-sync");
const LIMIT = 256;

let exponent = parseInt(input.question("Enter the exponent of 2 : "));
let k = 0;
let result;
let isLimitReached = false;

while(k <= exponent){
    result = 2 ** k;
    k++;
    if(result >= LIMIT){
        console.log("Limit exceeded");
        isLimitReached = true;
        break;
    }
}
(isLimitReached) ? console.log(result) :
                   console.log("2^" + exponent +"=" + result);
