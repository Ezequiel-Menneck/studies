- Grosso modo: Tudo com a capacidade de definir uma sequencia é um generator
- Por especificação: Toda função generator define não apenas uma sequencia, mas também uma sequencia iterável
- Definição rigorosa: Generators são functions que retornam iterator que carregam em lazy sequencias iterables

- Podemos criar uma generator function adicionando o \* após a keyword function, algo como:
```js
function* functionName() {}
```
- Porém apenas isso não fará nada de especial, precisamos adicionar mais um keyword, `yield`
- Essa keyword basicamente define a valor numa sequencia iteravel pelo gerator. Cada yield obtido na verdade é um valor na ordem em que aparece no generator.
```js
function* sequence() {
  yield 1;
  yield 2;
  yield 3;
}

let seq = sequence();

console.log(seq.next());
```

## Como generators funcionam?
- Revisando o código abaixo:
```js
function* sequence() {
   yield 1;
   yield 3;
   yield 5;
}

let seq = sequence();
```
- Quando sequence() function é chamada o interpretador se toca que é uma função generator e do mesmo modo retorna um iterator (porém o corpo da função não é executado imediatamente, podemos confirmar adicionando um console.log antes do yield)
- Quando chamamos o método next() pela primeira vez a execução começa dentro do generator and vai até o primeiro yield, ali ele retorna o valor e pausa.
- Podemos retornar qualquer coisa no yield, função, objeto, e assim vai

### Yield keyword

