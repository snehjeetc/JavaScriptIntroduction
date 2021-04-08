const input = require("readline-sync");

function guessNumber(){
    let low = 1;
    let high = 100;
    while(low < high){
        let k = Math.floor((high + low) / 2);
        let userAnswer = input.question(`is ${k} the number (y/n)?`);
        if(userAnswer == "y"){
            return k;
        }
        userAnswer = input.question(`is ${k} high? (y/n)`);
        switch(userAnswer){
            case "y" : high = k;
                       break;
            case "n" : low = k;
                       break;
            default : console.log("Wrong output!");
        }
    }
    return 0;
}

let number = parseInt(input.question("Enter the number [1-100]" 
                        + " and let the computer guess the number: "));
let guessedNumber = guessNumber();

if(guessedNumber == number)
    console.log("Vola the computer did it");
else 
    console.log("There must be some error");