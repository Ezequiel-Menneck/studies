let itens = [1, 2, 3, 4];

for (let item of itens) {
  console.log(item);
}

for (let i = 0; i < itens.length; i++) {
  let item = itens[i];
  console.log(item);
}

function makeIterator(arr) {
  let map = new Map();
  let index = 0;
  return {
    iter: () => {
      if (map.get(index) === index) {
        index++;
      }

      map.set(index, index);
      return { value: arr[index], done: arr[index] === undefined };
    },
  };
}

let nums = [1, 2, 3, 4, 5];

let value = makeIterator(nums);

console.log(value.iter());
console.log(value.iter());
console.log(value.iter());
console.log(value.iter());
console.log(value.iter());
console.log(value.iter());

console.log("-----------------------------------");

function makeIterator2(arr) {
  let i = 0;
  return {
    next: function () {
      if (i > arr.length - 1) {
        return { value: undefined, done: true };
      }
      return { value: arr[i++], done: false };
    },
  };
}

let iter2 = makeIterator2(nums);

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

console.log("------------------------------------------");

console.log(nums[0]);
console.log(nums[1]);

// How for of looks behiend the scenes
var nums2 = [1, 5, 16];

for (
  // initialisation
  var iter = nums2[Symbol.iterator](), next = iter.next(), num = next.value;
  // iterative check
  !next.done;
  // iterative expressions
  next = iter.next(), num = next.value
) {
  console.log(num);
}

// Re-write the function upside using while

let arr = [1, 2, 3, 4, 5];

let iterr = arr[Symbol.iterator](),
  next = iterr.next(),
  num = next.value;

while (!next.done) {
  console.log(num);

  next = iterr.next();
  num = next.value;
}
