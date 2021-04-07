let num = Math.floor(Math.random() * 10 ) % 10;
let word;

switch(num){
    case 0 : word = "Zero";
             break;
    case 1 : word = "One";
             break;
    case 2 : word = "Two";
             break;
    case 3 : word = "Three";
             break;
    case 4 : word = "Four";
             break;
    case 5 : word = "Five";
             break;
    case 6 : word = "Six";
             break;
    case 7 : word = "Seven";
             break;
    case 8 : word = "Eight";
             break;
    case 9 : word = "Nine";
}
console.log(num + "=" + word);