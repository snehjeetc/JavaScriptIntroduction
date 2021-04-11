const input = require("readline-sync");

let arrayOfIntegers = new Array();
let tripletMap = new Map();

function inputIntoTheArray(){
    let size = parseInt(input.question("Enter the size of the array: "));
    console.log("Enter the array elements: ");
    for(let i = 0; i < size; i++)
        arrayOfIntegers.push(parseInt(input.question()));
        
}

function mergeTwoSortedArrays(array, leftArray_start, leftArray_end, 
                             rightArray_start, rightArray_end){
    let tempArray = new Array();
    let k = leftArray_start;
    while(leftArray_start <= leftArray_end
         && rightArray_start <= rightArray_end){
            if(array[leftArray_start] < array[rightArray_start]){
                tempArray.push(array[leftArray_start]);
                leftArray_start ++;
            }
            else {
                tempArray.push(array[rightArray_start]);
                rightArray_start ++;
            }
         }
    
    while(leftArray_start <= leftArray_end)
        tempArray.push(array[leftArray_start++]);
    
    while(rightArray_start <= rightArray_end)
         tempArray.push(array[rightArray_start++]);
    
    let index = 0;
    while(k <= rightArray_end){
        array[k] = tempArray[index];
        k++;
        index++;
    }
}

function merge_sort(array, start, end){
    if(start >= end)
        return;
    let mid = Math.floor((start + end)/2);
    merge_sort(array, 0, mid);
    merge_sort(array, mid + 1, end);
    mergeTwoSortedArrays(array, start, mid, mid+1, end);
}

function findTriplets(array, tripletMap){
    key = 1; //key to append in the triplet map
    for(let i = 0; i < array.length - 2; i++){
        let j = i + 1;
        let k = array.length - 1;
        sum = 0 - array[i];
        while(j < k ){
            if(array[j] + array[k] < sum)
                j++;
            else if(array[j] + array[k] > sum)
                k--;
            else{
                let t = k;
                while(j < t && array[j] + array[t] == sum){
                    tripletMap.set(key, [array[i], array[j], array[t]]);
                    t--;
                    key++;
                }
                j++;
            }
        }
    }
}


inputIntoTheArray();
console.log(arrayOfIntegers)
//arrayOfIntegers.sort();
merge_sort(arrayOfIntegers, 0, arrayOfIntegers.length - 1);
console.log(arrayOfIntegers);
findTriplets(arrayOfIntegers, tripletMap);
//The triplets 
for(let [key, value] of tripletMap) console.log(key + ") " + value);
