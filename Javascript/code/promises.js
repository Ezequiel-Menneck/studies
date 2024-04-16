new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    })
  );
});

const myPromise = new Promise((resolve, reject) => {
  resolve("foo");
});

const myResolve = (a) => console.log(a);

myPromise.then(myResolve, "s");

const myPromise2 = (j) =>
  new Promise((a, b) => {
    a(j);
  });

myPromise2("test").then((e) => console.log(e));

// -------------------------------------------------------------------------
setTimeout(() => {
  console.log("Hewllo");
}, 3000);

const timerPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Tudo nos conformes");
  }, 2000);
  setTimeout(() => {
    reject("Erro 404");
  }, 3000);
});

timerPromise.then(
  (e) => console.log(`Deu boa: ${e}`),
  (j) => console.log(`Deu Erro; ${j}`)
);
// Nesse caso apenas o resolve será executado, já que ele chega primeiro

const timerPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Tudo nos conformes");
  }, 4000);
  setTimeout(() => {
    reject("Erro 404");
  }, 5000);
}).then((e) => {
  console.log(e);
});
// Não precisamos chamar a promise separada depois, podemos meter o .then() direto depois dela e ser feliz

console.log(typeof timerPromise);

const p = new Promise((resolve, reject) => {
  resolve("Resolvida");
});

const p2 = p.then(() => {
  return "Resolvido";
});

const p3 = new Promise(function (resolve, reject) {
  resolve("Resolve p3");
});

const p4 = p3.then(function () {
  return "p4 resolvida";
});

console.log("----------- p2 -----------");
console.log(p2);
console.log(p4);

console.log("----------- p4 -----------");
p4.then(function (value) {
  console.log(value);
});
console.log("----------- p4 -----------");
console.log(p4);

var p5 = new Promise(function (resolve, reject) {
  resolve("Data1");
});

var p6 = p.then(function (data) {
  // callback returns a non-promise value
  // in this case a string
  return "Data2";
});

console.log(p6);

const p7 = new Promise(function (resolve, reject) {
  resolve("ok");
});

const p8 = p7.then(function (data) {
  throw "Error";
});

const p9 = new Promise(function (resolve, reject) {
  reject("Rejected");
});

const p10 = new Promise(function (resolve, reject) {
  resolve("Resolvemos");
});

const p11 = p10.then(null, function (data) {
  return "OK";
});

console.log(p10);

console.log("----------- p8 -----------");
console.log(p7);
console.log(p9);
p8.then(function (data) {
  console.log("then");
  console.log(data);
}).catch(function (data) {
  console.log("Error catch");
  console.log(data);
});

console.log(p8);

const p12 = new Promise(function (resolve, reject) {
  resolve("OK");
});

const p13 = p12.then(function (data) {
  return new Promise(function (resolve, reject) {
    resolve(data + " Bye");
  });
});

console.log(p13);
p13.then(function (data) {
  console.log(data);
});

var p14 = new Promise(function (resolve, reject) {
  throw "Sorry";
}).then(
  (data) => console.log(data),
  (data) => data
);

var p15 = new Promise(function () {
  return "OK";
});

var p16 = p.then(function (data) {
  return data;
});

var p17 = p2.then(function (data) {
  return data + " Bye";
});

// console.log(p3);
p17.then(function (data) {
  console.log(data);
});
