const input = require("readline-sync");

function convert_deg_unit(magnitude, degree){
    switch(degree){
        case "C" : 
                return magnitude * (9/5) + 32;
        case "F" : 
                return (magnitude - 32) * (5/9);
        default :
                return null;
    }
}

function checkRange(magnitude, unit){
    switch(unit){
        case "C" : 
            if(magnitude >= 0 && magnitude <= 100)
                return 1;
            else
                return 0;
        case "F" : 
            if(magnitude >= 32 && magnitude <= 212)
                return 1;
            else
                return 0;
        default :
            return -1;
    }
}

let magnitude = parseFloat(input.question("Enter the magnitude: "));
let unit = input.question("Enter the degree (C/F) : ");

let validateInput = checkRange(magnitude, unit);
if(validateInput == -1)
    console.log("Wrong Unit");
else if(validateInput == 0)
    console.log("Not in range");
else
    console.log(convert_deg_unit(magnitude, unit));