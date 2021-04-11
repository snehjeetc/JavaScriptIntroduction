//generates 10 random 3 digit numbers, stored in array and finds out 
//the second largest and smallest array

const LENGTH_OF_ARRAY = 10;
let randomNumbers = new Array();

function generateRandom3DigitNumber(){
    return Math.floor(Math.random() * 1000) % 900 + 100; 
}

function storeInArray(){
    for(let i = 0; i < LENGTH_OF_ARRAY; i++){
        randomNumbers.push(generateRandom3DigitNumber());
    }
}

function get2ndMin_Max(){
    let maximum = 99;
    let secondMaximum = 99;
    let minimum = 1000;
    let secondMinimum = 1000;
    for(let i = 0; i < LENGTH_OF_ARRAY; i++){
        if(maximum < randomNumbers[i]){
            secondMaximum = maximum;
            maximum = randomNumbers[i];
        }
        else if(secondMaximum < randomNumbers[i])
            secondMaximum = randomNumbers[i];

        if(minimum > randomNumbers[i]){
            secondMinimum = minimum;
            minimum = randomNumbers[i];
        }
        else if(secondMinimum > randomNumbers[i])
            secondMinimum = randomNumbers[i];
    }
    return [secondMaximum, secondMinimum];
}

storeInArray();
console.log(randomNumbers);
secondMinMaxOfArray = get2ndMin_Max();
console.log("Second Max : " + secondMinMaxOfArray[0]);
console.log("Second Min : " + secondMinMaxOfArray[1]);

