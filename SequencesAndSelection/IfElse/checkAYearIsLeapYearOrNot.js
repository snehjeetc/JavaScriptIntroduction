const input = require("readline-sync");

let year = input.question("Enter the year (4 digits): ");
let isLeap;

if(year%4 == 0){
    if(year%100 == 0){
        if(year%400 == 0)
            isLeap = true;
        else 
            isLeap = false;
    }
    else 
        isLeap = true;
}
else 
    isLeap = false;

let filler = (isLeap) ? "" : " not a";
console.log("This " + year + " is" + filler + " leap year");