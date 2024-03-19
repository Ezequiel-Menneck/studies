É um proxy para um valor não necessariamente conhecido quando a promise é criada. Permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: ao invés de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento futuro.

Uma **Promise** está em um desses 3 estados:
- *pending:* estado inicial, nem cumprido, nem rejeitado.
- *fulfilled:* significa que deu tudo certo.
- *rejected:* significa que a operação falhou.

O estado eventual de uma promise pendente pode ser *fullfilled* com um valor ou *rejected* com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método `then` são chamados.

Uma promise é considerada *resolvida* se for cumprida ou rejeitada, não pendente.


```javascript
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Essa promise já está _resolvida_ no momento em que é criada (porque o `resolveOuter` é chamado de forma síncrona), mas é resolvido com outra promise e, portanto, não será _cumprida_ até 1 segundo depois, quando a promise interna for cumprida. Na prática, a "resolução" muitas vezes é feita nos bastidores e não observável, e apenas o seu cumprimento ou rejeição o são.

### Promises em cadeia

Os métodos `Promise.prototype.then(), Promise.prototype.catch() e Promise.prototype.finally()` são usados para associar uma ação adicional com uma promise que se torna liquidada. Como `Promise.prototype.then() e Promise.prototype.catch()` retornam promises, eles podem ser encadeados.

O método `.then()` aceita até 2 argumentos; primeiro é uma função de retorno de chamada para o caso cumprido da promise, o segundo é uma função de retorno de chamada para o caso de rejeição. Cada `.then()` retorna um objeto de promise recém-gerado, que pode ser usado para encadeamento.

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

minhaPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```
Nesse caso o processamento continua para o próximo elo da cadeira mesmo quando um .then() não possui uma função de retorna de chamada que retorna um Objeto Promise. Portanto, uma cadeia pode omitir com segurança cada *rejection* function de retorno até a chamada do .catch() final.

Manipular promises rejeitadas em cada .then() tem consequências mais adiante na cadeia de promises. As vezes não temos escolha por que um erro deve ser tratato imediatamente. Porém, sem necessidade imediata de tratamento podemos deixar de fora até a instrução .catch(), que é como se fosse um .then() porém sem receber uma função de retorno caso a chamada seja cumprida.

```javascript
minhaPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

#### Métodos úteis

`Promise.all` -> Aguarda até que todas as promises sejam cumpridas ou que alguma seja rejeitada.
`Promise.allSettled` -> Aguarda até que todas as promises sejam resolvidas (podem ser cumpridas ou rejeitadas)
`Promise.reject(reason)`-> Retorna um novo objeto Promise que é rejeitado com o motivo fornecido
`Promise.resolve(value)` -> Retorna um nojo objeto Promise que é resolvido com o valor fornecido.

***Note***
```javascript
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("foo");
	}, 300)
});

const myResolve = (a) => console.log(a)

myPromise.then(myResolve, "a")
```
Nesse caso criamos uma promise que recebe os 2 parametros já comentados, um para resolver e outro para receber erros, como ambos são funçoes podemos definir de nosso modo, nesse caso apenas recebe um elemento que passamos dentro da promise e retorna, mas pode ser qualquer coisa.

```javascript
const myPromise2 = (j) => new Promise((a, b) => {
	a(j)
})

myPromise2("test").then(e => console.log(e))
```
Criando uma promise que recebe um valor e o printa no console. Pode ser feito qualquer coisa com esse valor, só p exemplificar como ficaria.

