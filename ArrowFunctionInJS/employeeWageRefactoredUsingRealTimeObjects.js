const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

//For UC10 - to store objects in array;
let empDailyHrsAndWageArray = new Array();

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

         //UC 10 creation of Object
         empDailyHrsAndWageArray.push(
            {
                dayNum : totalWorkingDays, 
                dailyHours : empHrs,
                dailyWage : calculateDailyWage(empHrs),
                toString(){
                    return '\nDay' + this.dayNum + ' => Working hours is ' 
                            + this.dailyHours + ' And wage earned = ' + this.dailyWage;
                }
            });
     }
let empWage = calculateDailyWage(totalWorkingHrs);
console.log("UC-6 : Total Working days: "+ totalWorkingDays + 
            "Hour: " + totalWorkingHrs + " " + " Emp Wage : " + empWage);

//Array Helper functions 
//UC 12A - Calc total wage using Reduce function of 
//array of objects
let totEmpWage = 0;
function sum(dailyHrsAndWageObject){
    totEmpWage += dailyHrsAndWageObject.dailyWage;
}
empDailyHrsAndWageArray.forEach(sum);
console.log("UC12A - Total Days: " + totalWorkingDays + " Total Hours: " + totalWorkingHrs 
           + " " + " Emp Wage: " + totEmpWage);

console.log("UC12A - Emp wage with reduce : " + 
            empDailyHrsAndWageArray.reduce((totalWage, dailyHrsAndWageObject) => 
                                            totalWage += dailyHrsAndWageObject.dailyWage, 
                                            0));

//UC-12B - Show the day along with Daily Wage
console.log("UC 12B : Showing the day along with Daily wage");
empDailyHrsAndWageArray.forEach(dailyHrsAndWage => 
    console.log(dailyHrsAndWage.dayNum + " = " + dailyHrsAndWage.dailyWage));

//UC-12C - Show days when full time wage of 160 were earned 
console.log("UC 12C - Daily wage filter when full time wage earned: ");
empDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                       .forEach(dailyHrsAndWage => 
                        console.log(dailyHrsAndWage.dayNum + " = " + dailyHrsAndWage.dailyWage));

//UC-12D - find the first occurence when the employee earned full time wage that is 160
//using find function 
console.log("UC 12D - First time fulltime wage was earned on Day: " + 
            empDailyHrsAndWageArray.find(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 160));

//UC 12E - check if every element of full time wage is truly holding full time wage
console.log("UC 7E - check all elements have full time wage: " + 
            empDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 8)
                                   .every(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 160));

//UC 12F - Check if there is any part time wage 
console.log("UC 12F - Check if any part time wage : "+
            empDailyHrsAndWageArray.some(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 80));

//UC 12G - find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 12G - The number of days the employee worked : " + 
            empDailyHrsAndWageArray.reduce(
                (totalDaysWorked, dailyHrsAndWage) => totalDaysWorked += dailyHrsAndWage.dayNum
                , 0));

//UC 10- Java script objects 
console.log("UC10 : Showing Daily hours worked and wage earned: " + empDailyHrsAndWageArray);

//UC 11A to UC 11D using object Functions along with arrow functions

let totalWages_fromObject = empDailyHrsAndWageArray
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours_fromObject = empDailyHrsAndWageArray
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("UC 11A Total hours : " + totalHours_fromObject + " Total Wages: " + totalWages_fromObject);