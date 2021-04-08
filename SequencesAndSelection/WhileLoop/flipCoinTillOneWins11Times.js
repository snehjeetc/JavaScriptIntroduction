const WINNING_POINT = 11;
let headCount = 0;
let tailCount = 0;

function toss(){
    return Math.floor(Math.random() * 10) % 2;
}

while(headCount < WINNING_POINT && tailCount < WINNING_POINT){
    if(toss() == 0)
        headCount++;
    else 
        tailCount++;
}

console.log("Number of times Tail won: " + tailCount);
console.log("Number of times head won: " + headCount);