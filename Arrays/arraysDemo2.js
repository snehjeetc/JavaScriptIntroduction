let oriDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("American curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

//Array copy elements
let slicedDogs = origDogs.slice(1, 2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);       //same as [...origDogs];

//copy within this never adds element in the array 
//it only over writes the existing element 
//copywithin(target, start, end);
//copy the first two elements to third position 
dogs.copyWithin(2, 0, 2);

//stack functions (LIFO) Push and Pop
let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "Golden Retriever";

//Add and remove from first
let addFirst = dogs.unshift("Poodle");
let shiftDogs = dogs.shift();

//Atomic add and remove elements (where, how many to remove, element list)
dogs.splice(2, 1, "Pug", "Boxer");

//Array function - concat/slice/sort
let animals = dogs.concat(cats, birds);
let newAnimals = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();

function scanArray([first, second]) { console.log("Scan function : " + first + " " + second); }
scanArray(animals);
let joinAnimals_string = animals.join(" ");
let allAnimals = "";
for(let animal of animals) allAnimals = animal + " ";
console.log("All animals : " + allAnimals);