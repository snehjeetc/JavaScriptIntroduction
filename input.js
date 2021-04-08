const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function takeInput(question){
    readline.question(`${question}`, value => {
        console.log(value);
        
        return value;
        readline.close();
    });
}

let age;
age = takeInput("Enter your age: ");
console.log("Age: " + age);