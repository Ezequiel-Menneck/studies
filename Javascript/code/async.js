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
