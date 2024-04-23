function return1() {
  return function robs() {
    console.log("abrobras rosbosns");
  };
}

function* sequence() {
  console.log("primeiroskin");
  yield 1;
  console.log("segundoskin");
  yield 2;
  console.log("terceiroskin");
  yield return1();
}

let seq = sequence();

console.log(seq.next());
console.log(seq.next());
let abobora = seq.next();
// console.log(seq.next());

console.log("--------------");
console.log(abobora.value());
