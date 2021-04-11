//Arrays topic 

let girlsName = ["Maya", "Riya", "Sita"];
let boysName = ["Nikhil", "Mayur", "Omkar"];

//concat
let newArray = girlsName.concat(boysName);
console.log(girlsName);

//length 
let girlsArrayLength = girlsName.length;
console.log("Girls Names : " + girlsName.length + "Boys Names: " + boysName.length);

//includes 
value = boysName.includes("Nikhil");
console.log(value);

//index of 
let position = girlsName.indexOf("Sita");
console.log("Maya position : " + position);

//join
let result = girlsName.join();
console.log(result);

//keys and values 
let allValues = girlsName.values();
for(let value of allValues){
     console.log("Value : " + value);
}

//last index of 
var fruits = ["Banana", "Orange", "Apple", "Mango", "Orange"];
var a = fruits.lastIndexOf("Orange");
console.log("Last index of Orange in the fruits array : " + a);

//pop
let newList = fruits.pop();
console.log("New List : " + newList + "fruits array : " + fruits);

//push 
fruits.push("Pineapple");
console.log("After pushing : " + fruits);

//reverse
fruits.reverse();
console.log("Reversed the array fruit : " + fruits);

//shift
fruits.shift();
console.log("Shifting : " + fruits);

//unshift 
fruits.unshift("Grapes");
console.log("Unshift adds to the first index in the array : " + fruits);

//splice 
var fruitsArray = ["Banana", "Apple", "Orange", "Mango"];
fruitsArray.splice(1, 0, "Lemon", "Kiwi");
console.log("Splice : " + fruitsArray);

//slice 
var fruitsArray = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2, 4);
console.log("slicing the fruitsArray to get citrus array: " + citrus);


//reduce 
var numbers = [175, 50, 25];

var sum = 0;
for(let n of numbers)
    sum += n;
console.log("Sum using for loop : " + sum);
//this same line of code can be reduced to just one simple statement 
//using the reduce keyword

numbers.reduce((total, num) => total + num, 0);

numbers.reduce(myFunc);
function myFunc(total, num){
    console.log("Starting total : " + total + ": Current number " + num);
    return total + num;
}

function sum1(arr){
    const reducer = (sum, val) => sum + val;
    const initiliazeValue = 0;
    
    
    return arr.reduce((sum, val) => {
        return sum + val;
    }, 10);
    
 //  return arr.reduce((sum, currentVal) => sum + currentVal, 10);
}

result = sum1([1, 3, 5, 7, 8]);
console.log("Sum of an temprorary array : " + result);``