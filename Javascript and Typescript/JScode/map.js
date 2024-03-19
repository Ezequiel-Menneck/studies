const myMap = new Map();

myMap.set("key", "value");
myMap.set("cat", "meow");
myMap.set("dog", "woof");

myMap.size; // 3

myMap.get("key"); // value
myMap.get("robson"); // undefined

myMap.has("jordan"); // false

myMap.delete("key");
myMap.has("key"); // false

for (const [key, value] of myMap) {
  console.log(`${key} for ${value}`);
}
// "cat for meow"
// "dog for woof"

myMap.clear();
myMap.size; // 0
