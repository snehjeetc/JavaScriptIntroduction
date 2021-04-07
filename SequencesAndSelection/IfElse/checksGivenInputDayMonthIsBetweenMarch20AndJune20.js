const input = require("readline-sync");

let month = input.question("Enter the month [1-12]");
let day = input.question("Enter the day [1-31]");
let res;

if(month >= 3 && month <= 7){
    if(month == 3 && day >= 20 && day <= 31)
        res = true;
    else if(month > 3 && month < 7 && day > 0 && day <=31)
        res = true;
    else if(month == 7 && day >= 1 && day < 20)
        res = true;
    else 
        res = false;
}
else 
    res = false;

let expression_result = (res) ? "in" : "not";
console.log("The entered month and day is " + expression_result + " between");