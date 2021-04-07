function getDiceNumber(){
    return Math.floor(Math.random() * 10) % 6 + 1;
}

let dice_number_one = getDiceNumber();
let dice_number_two = getDiceNumber();

console.log("Dice Number one : " + dice_number_one);
console.log("Dice number two : " + dice_number_two);

let sum = dice_number_one + dice_number_two;
console.log("sum of two dice numbers: " + sum);
