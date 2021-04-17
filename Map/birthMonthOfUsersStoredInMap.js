const charactersNeeded = "abcdefghijklmnopqrstuvwxyz";
let birthMonths_Of_users = new Map();

function generateRandomStrings(length){
    let result = ' ';
    const charactersLength = charactersNeeded.length;
    for(let i = 0; i < length; i++){
        result += charactersNeeded.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getMonthName(monthNumeral){
    switch(monthNumeral){
        case 1: return "JAN";
        case 2: return "FEB";
        case 3: return "MAR";
        case 4: return "APR";
        case 5: return "MAY";
        case 6: return "JUN";
        case 7: return "JUL";
        case 8: return "AUG";
        case 9: return "SEP";
        case 10: return "OCT";
        case 11: return "NOV";
        case 12: return "DEC";
    }
}

function assignRandomBirthMonthsToUsers(){
    for(k = 1; k <= 50; k++){
        let key = Math.floor(Math.random() * 12) % 12 + 1;
        userName = generateRandomStrings(5);
        storeUserData(userName, getMonthName(key));
    }
}

function storeUserData(userName, monthName){
    if(birthMonths_Of_users.has(monthName))
        birthMonths_Of_users.get(monthName).push(userName);
    else
        birthMonths_Of_users.set(monthName, [userName]);
}

function printBirthMonthsOfUsers(){
    for(let [key, value] of birthMonths_Of_users.entries()){
        console.log(key + ": " + value);
    }
}

function printCommonBirthMonthsOfUsers(){
    for(let [key, value] of birthMonths_Of_users.entries()){
        if(value.length > 1)
            console.log(key + ": " + value);
    }
}

assignRandomBirthMonthsToUsers();
console.log("Birth months of all users:\n");
printCommonBirthMonthsOfUsers();
console.log("Common of birth months of users:\n");
printCommonBirthMonthsOfUsers();