
-> `arguments`é um objeto estilo array acessível dentro das funções, ele contem os valores dos argumentos passados para a função.

```javascript
// Não conseguimos ter acesso aos argumentos passados pelo `arguments` 
const myFunc = (a, b, c) => {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
};

myFunc(1, 2, 3);

// Conseguimos ter acesso aos argumentos passados pelo `arguments` 
function myFunc2(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

myFunc2(1, 2, 3);
```
-> No caso de arrow functions não conseguimos utilizar o `arguments` devido as arrow functions não terem seu próprio objeto `arguments` devido a serem funções sem o objeto arguments e sem o this.

