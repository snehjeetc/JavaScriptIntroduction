const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empDailyHrsMap = new Map();
let empDailyWageMap = new Map();

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

function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

let totalWorkingHrs = 0;
let totalWorkingDays = 0;
while(totalWorkingHrs <= MAX_WORKING_HRS_IN_MONTH &&
     totalWorkingDays < NUM_OF_WORKING_DAYS){
         totalWorkingDays ++;
         let empCheck = Math.floor(Math.random() * 10) %3;
         let empHrs = getWorkingHours(empCheck);
         totalWorkingHrs += empHrs;
         empDailyWageArr.push(calculateDailyWage(empHrs));
         empDailyHrsMap.set(totalWorkingDays, empHrs);
         empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
     }
let empWage = calculateDailyWage(totalWorkingHrs);
console.log("UC-6 : Total Working days: "+ totalWorkingDays + 
            "Hour: " + totalWorkingHrs + " " + " Emp Wage : " + empWage);

//Array Helper functions 
//UC 7A - Calc total wage using Array traversal or reduce functions
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + " Total Hours: " + totalWorkingHrs 
           + " " + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//UC-7B - Show the day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDailyWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("UC7B - Daily wage map: ");
console.log(mapDayWithWageArr);

//UC-7C - Show days when full time wage of 160 were earned 
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC-7C - Daily wage filter when full time wage earned: ");
console.log(fullDayWageArr);

//UC-7D - find the first occurence when the employee earned full time wage that is 160
//using find function 
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D - First time fulltime wage was earned on Day: " + 
            mapDayWithWageArr.find(findFullTimeWage));

//UC-7E - check if every element of full time wage is truly holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes(160);
}
console.log("UC 7E - check all elements have full time wage: " + 
            fullDayWageArr.every(isAllFullTimeWage));

//UC 7F - Check if there is any part time wage 
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if any part time wage : "+
            mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - The number of days the employee worked : " + 
            empDailyWageArr.reduce(totalDaysWorked, 0));

console.log("UC 8: Stored the daily wage in the map corresponding to the day");
console.log(empDailyWageMap);
console.log("Total Wage calculate from the map : " +  
            Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC 9 - Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values())
                      .filter(dailyHours => dailyHours > 0)  
                      .reduce(findTotal, 0);
let totalSalary = empDailyWageArr
                    .filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal, 0);
console.log("UC9A - Emp wage with Arrow functions: " + "Total Hours: " +
           totalHours + " Total Wages: " + totalSalary);

//UC 9B - show the fullworking days, part working days and no working days
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach( (value, key, map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part Working days : " + partWorkingDays);
console.log("Non working days : " + nonWorkingDays);
