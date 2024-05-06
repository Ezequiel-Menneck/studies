console.log(module);

function sayHi(txt) {
  console.log(`Oie + ${txt}`);
}

module.exports.sayHi = sayHi;

console.log(module);
