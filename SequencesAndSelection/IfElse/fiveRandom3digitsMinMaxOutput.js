let max = 0;
let min = 1000;

for(let i = 1; i <= 5; i++){
    let variable = Math.floor(Math.random() * 900) + 100;
    if(variable > max)
        max = variable;
    if(variable < min)
        min = variable;
}

console.log("Max = " + max);
console.log("Min = " + min);