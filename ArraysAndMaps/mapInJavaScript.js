//map
const map1 = new Map();

map1.set("Name", "Raj"); //insert item
map1.set("LastName", "Shekhar");

value = map1.get("Name");   //get
console.log(value);

console.log("Size : " + map1.size); //size

map1.delete("Name");
console.log(map1.has("Name"));

map1.clear();
console.log("Size after clearing the map: " + map1.size);

map1.set("Name", "Raj"); //insert item
map1.set("LastName", "Shekhar");
//iteration of map
for(let item of map1.keys()){
    console.log("Key : " + item);
    
}

for(let [key, value] of map1){
    console.log("Key: " + key + "-" + "Value: " + value);
}

for(let value of map1.values()){
    console.log(value);
}

console.log(Array.from(map1));
console.log([...map2]);
