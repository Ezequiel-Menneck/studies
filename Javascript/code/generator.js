// function return1() {
//   return function robs() {
//     console.log("abrobras rosbosns");
//   };
// }

// function* sequence() {
//   console.log("primeiroskin");
//   yield 1;
//   console.log("segundoskin");
//   yield 2;
//   console.log("terceiroskin");
//   yield return1();
// }

// let seq = sequence();

// console.log(seq.next());
// console.log(seq.next());
// let abobora = seq.next();
// // console.log(seq.next());

// console.log("--------------");
// console.log(abobora.value());

function* func1() {
  yield [1, 2, 3, 4, 5];

  //   yield* func1();
}

for (const i of func1()) {
  processData(i);
}

function processData(arr) {
  arr.forEach((element) => {
    element * 2;
  });

  console.log(arr);

  return arr;
}

processData([1, 2, 3, 4, 5]);
