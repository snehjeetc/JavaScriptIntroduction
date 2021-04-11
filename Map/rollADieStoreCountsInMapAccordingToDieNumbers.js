const LIMIT = 10;
let dieCounts = new Map();


function init_DieCounts(){
    for(let i = 1; i <=6; i++)
        dieCounts.set(i, 0);
}
function generateRollingDieNumbers(){
    return Math.floor(Math.random() * 10) % 6 + 1;
}
function isLimitReached(){
    for(let i = 1; i <= 6; i++){
        if(dieCounts.get(i) == LIMIT)
            return true;
    }
    return false;
}

function rollDieUptoTheLimit(){
    while(!isLimitReached()){
        let dieNumber = generateRollingDieNumbers();
        let die_count = dieCounts.get(dieNumber);
        dieCounts.set(dieNumber, die_count + 1);
    }
}

function getMaxAndMinCount(){
    let maximum = -1;
    let maxKey;
    let minimum = LIMIT + 1;
    let minKey;
    for(let key of dieCounts.keys()){
        let count = dieCounts.get(key);
        if(maximum < count){
            maximum = count;
            maxKey = key;
        }
        if(minimum > count){
            minimum = count;
            minKey = key;
        }
    }
    return [[maxKey, maximum],[minKey, minimum]];
}

init_DieCounts();
rollDieUptoTheLimit();
let max_min = getMaxAndMinCount();
console.log("Maximum : " + max_min[0][0] + " = " + max_min[0][1]);
console.log("Minimum : " + max_min[1][0] + " = " + max_min[1][1]);

