-> Precisamos utilizar Js de maneira assíncrona p evitar que em N casos nosso programa "trave" quando tivermos alguma tarefa que demore algum tempo. Como Js é single Thread ele usará a Thread toda p realizar a ação demorada, impossibilitando fazer outras coisas. Se utilizamos da api assíncrona isso não acontece, ele joga a tarefa de lado p resolver e podemos continuar mexendo no app numa boa.

## Promises

-> A grosso modo podemos dizer que uma promise é uma maneira de simplificar a tarefa de escrever código complexo assíncrono. 
-> De modo mais técnico podemos dizer que uma promise é um objeto que representa o sucesso ou a falha de uma determinada operação, comumente uma operação assíncrona.

### Benefícios de usar Promises
-> Mitigamos os leveis extra de edentação
-> Error handling com promises é muito mais conciso e fácil de manter.
-> Faz o código parecer síncrono mesmo sendo assíncrono usando async/await

### Básico
-> Podemos criar uma Promise com o construtor Promise(), ele recebe 2 argumentos inicialmente, resolve e reject
-> Ao criamos uma Promise desse modo ao chamar ela não conseguimos fazer algo como minhaPromiseX() já que ela não é uma função, logo precisamos do .then()

### Método then()
-> É usado para executar a função que a promise será rejeitada ou resolvida.
-> then() aceita 2 argumentos
	-> Uma função para ser chamada quando a promise for fullfiled (deu boa)
	-> Uma função para ser chamada quando a promise for rejected (deu ruim)
->


### Chaining

-> Chaining refere-se a notação de chamar o then() na promise retornada por outro then()
-> Como funciona: Quando chamamos .then(f1, r1) estamos criando uma nova promise que é guardada internamente em uma nova fila, divergente da successCallbackQueue e failureCallbackQueue e é resolvida quando chamamos um de seus callback, f1 ou r1
-> 3 Retornos possíveis quando chamamos um callback pro then():
	-> Non-promise value: Se retornamos algo que não é promise, como number, string, array a promise se resolve e assume esse valor.
	-> Exception: É resolvida imediatamente no reject e retorna um promise rejected assumindo o valor do erro também 


# Async/Await

-> Syntax especial para trabalharmos de modo mais confortável com promises.

### Async Functions

-> Começamos com a keyword async, colocada antes de funções, algo como: `async function oi() { return 'oi' }`

-> A palavra async antes de uma função significa apenas uma coisa, essa função sempre retorna uma promise, Outros valores são agrupados em uma promise resolvida automaticamente.
Exemplo:
```javascript

async function f() {
	return 1;
}

f().then(alert) // 1

```

Nesse caso a promise é resolvida na mesma paulada, ali no return 1, marcada com Fulfilled e seu valor 1
O mesmo código pode ser reescrito como
```javascript
async function f() {
	Promise.resolve(1)
}

f().then(alert) // 1
```

# Await
Syntax:
```javascript
// only works inside async functions
let value = await promise;
```

Await keyword faz com que o Js espera a promise set settles (resolvida ou rejeitada) e retorna o resultado dela.
Exemplo de uma promise que é resolvida em 1 sec:
```javascript
async function w() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });

  let result = await promise;

  alert(result);
}
```
Em um caso desse como a função w() o código é pausado na linha do await, esperamos a promise ser resolvida e assim retomado para o alert(result)
