##### Função Anônima Imediatamente Invocada (Immediately Invoked Function Expression - IIFE)

Função que não precisa ter necessariamente um nome (pode ter mas será ignorado já que é anonimo) e é executada logo após sua "criação", ou seja, no momento que o código está sendo executado e chega na linha dela ela é executada.
Pode ser escrita como:
```javascript
(function() {
	// Faz algo aqui dentro
	console.log("oi");
})()

(() => {console.log("oi²")})()
```

### Typeof

Retorna uma string indicando o tipo do operador selecionado
```javascript
console.log(typeof 34)
// number

console.log(typeof true)
// boolean

console.log(typeof 32.2);
// number

console.log(typeof "32");
// string
```


### Instanceof

Verifica se um objeto, number, string (alguma coisa que escolhermos) é uma instancia derivada de um objeto, number, string (algo que escolhermos de novo)
```javascript
console.log(j instanceof a)
// true

  

console.log(k instanceof a)
// false

  

const l = "oi"
console.log(l instanceof String)
// false, l é uma string primitva não uma "String"

  

const s = new String("oi2")
console.log(s instanceof String)
// true, s é uma String

  

const num = 32;
console.log(num instanceof Number)
// false, num é um numero primitivo não um "Number"

  

const num2 = new Number(32)
console.log(num2 instanceof Number)
// true, num2 é um Number

const myFunc = a => {
return new String(a);
}
const func2 = myFunc("oi")
console.log(func2 instanceof String)
// true
```

## Hoisting

Pode ser considerado uma feature de `var` porém de um modo diferente.
Algumas caracteristicas:
- Nos permite usar o valor da variável no escopo antes da linha de declaração
- Permite referenciar a variável no escopo antes da linha de declaração sem termos o erro de `ReferenceError` mas o valor sempre será undefined


## Symbol

É um objeto construído por nós que nos retornar um `symbol`. Nos garante que será unico. São usados para adicionarmos uma propriedade única como keys em um objeto evitando colisões das chaves.

Todo `Symbol()` chamado garante que retornara um Symbol unico. Todo `Symbol.for("key")` retorna o mesmo Symbol for o valor em `"key"`. Quando chamamos `Symbol.for("key")` se o Symbol daquela chave existe em contexto global ele será retornado. Caso contrário um novo Symbol será criado para aquela chave e retornado.

```javascript
let symb = Symbol("oi") // Criamos o sumbol oi

console.log(symb) // Printa Symbol(oi)
console.log(Symbol.for("carro")) // Cria o Symbol("carro") e nos retorna ele mesmo

// Recebe uma key do tipo Symbol, como Symbol.for("carro") e retorna o valor da key, nesse caso seria apenas carro
Symbol.keyFor("key tipo Symbol") 
```

