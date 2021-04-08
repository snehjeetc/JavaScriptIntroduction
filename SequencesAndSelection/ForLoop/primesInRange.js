const input = require("readline-sync");

function printPrimesInRange(from, to){
    let k;
    if(from == 1)
        k = 2;
    else
        k = from;
    
    for(; k <= to; k++){
        let isPrime = true;
        for(let i = 2; i <= k/2; i++)
            if(k%i == 0){
                isPrime = false;
                break;
            }
        if(isPrime)
            console.log(k + " ");
    }
}

let first = parseInt(input.question("Enter the lower bound : "));
let last = parseInt(input.question("Enter the upper bound : "));

printPrimesInRange(first, last);