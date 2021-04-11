//generates 10 random 3 digit numbers, stored in array and
//sorted using insertion sort 
//finds out the second largest and smallest array

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

function insertion_sort(array){
    let end = 0;
    while(end < array.length - 1){
        let i = end + 1;
        let j = end;
        let temp = array[i];
        while(i != 0 && temp < array[i-1]){
            array[i] = array[j];
            i--;
            j--;
        }
        array[i] = temp;
        end++;
    }
}

function get2ndMin_Max(){
    let secondMaximum;
    let secondMinimum;
    let smallestElementIndex = 0;
    while(smallestElementIndex < randomNumbers.length-1 && 
          randomNumbers[smallestElementIndex] == randomNumbers[smallestElementIndex + 1])
          smallestElementIndex++;
    if(smallestElementIndex == randomNumbers.length)
        secondMinimum = randomNumbers[0];      
    else
        secondMinimum = randomNumbers[smallestElementIndex + 1];

    let largestElementIndex = randomNumbers.length -1 ;
    while(largestElementIndex > 0 &&
          randomNumbers[largestElementIndex] == randomNumbers[largestElementIndex -1])
          largestElementIndex--;
    if(largestElementIndex == 0)
        secondMaximum = randomNumbers[randomNumbers.length - 1];
    else
        secondMaximum = randomNumbers[largestElementIndex - 1];
    return [secondMaximum, secondMinimum];
}

storeInArray();
console.log(randomNumbers);
insertion_sort(randomNumbers);
console.log(randomNumbers);
secondMinMaxOfArray = get2ndMin_Max();
console.log("Second Max : " + secondMinMaxOfArray[0]);
console.log("Second Min : " + secondMinMaxOfArray[1]);

