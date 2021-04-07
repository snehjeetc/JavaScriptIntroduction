function random2DigitNumber(){
    return Math.floor(Math.random() * 90) + 10;
}

let five_random_numbers = Array(5);

for(let i = 0; i < five_random_numbers.length; i++)
    five_random_numbers[i] = random2DigitNumber();

let sum = five_random_numbers.reduce((total, currentValue) => (total + currentValue), 0);

let average = sum / 5;

console.log("Sum = " + sum + " | Average = " + average);
