const input = require("readline-sync");

function harmonicNumber(n){
    if(n == 0)
        return null;
    let h = 0;
    for(let k = 1; k <= n; k++)
        h += 1/k;
    return h;
}

let nth = input.question("Enter the value of n: ");
nth = parseInt(nth);

console.log(nth + "th Harmonic = " + harmonicNumber(nth));