const TOTAL_NUMBER_OF_TRIES = 50;

let numberFrequency = Array(10).fill(0);
let probability = Array(10).fill(0);

for(let i = 1; i < TOTAL_NUMBER_OF_TRIES; i++){
    let singleDigit = Math.floor(Math.random() * 10) % 10;    
    numberFrequency[singleDigit]++;
}

console.log("number  : probability");
   
for(let i= 0; i < numberFrequency.length; i++){
    probability[i] = numberFrequency[i]/TOTAL_NUMBER_OF_TRIES;
    console.log(i + "\t:\t" + probability[i]);
}


