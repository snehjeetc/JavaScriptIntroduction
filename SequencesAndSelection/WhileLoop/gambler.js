const BALANCE_TO_BE_ATTAINED = 200;
let bal = 100;
let gambling_prize = 5;
let bet_place = 1;

function isBetWon(){
    return Math.floor(Math.random() * 10) %2;
}

while( bal > 0 && bal < 200){
    if(isBetWon())
        bal += bet_place * gambling_prize;
    else{
        if(bal - (bet_place * gambling_prize) < 0)
            break;
        bal -= bet_place * gambling_prize;
    }
}

console.log("Balance is: " + bal);
