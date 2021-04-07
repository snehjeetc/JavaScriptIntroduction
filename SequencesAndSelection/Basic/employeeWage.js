const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

//UC3 - function 
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME : 
            return PART_TIME_HOURS;
        case IS_FULL_TIME : 
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
while(totalWorkingHrs <= MAX_WORKING_HRS_IN_MONTH &&
     totalWorkingDays < NUM_OF_WORKING_DAYS){
         totalWorkingDays ++;
         let empCheck = Math.floor(Math.random() * 10) %3;
         totalWorkingHrs += getWorkingHours(empCheck);
     }
let empWage = totalWorkingHrs * WAGE_PER_HOUR;
console.log("Total Working days: "+ totalWorkingDays + 
            "Hour: " + totalWorkingHrs + " " + " Emp Wage : " + empWage);