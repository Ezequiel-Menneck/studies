const mySet = new Set();

mySet.add(1)
mySet.add("bar")
mySet.add("foo")
mySet.add("bar")

mySet.has(1) // true
mySet.delete("foo")
mySet.size // 2 because mySet only add "bar" one time,
// because he is only add unique keys

for (const item of mySet) {
    console.log(item)
}

console.log(mySet.size)

// 1
// "bar"

const myArr = Array.from(mySet)
const myArr2 = [...mySet]
console.log(myArr)
console.log(myArr2)
