## For...of loop
-> Parecido com o esquema do for com : do Java, especificamos uma sequencia and o resto é com ele, algo como:
```javascript
let itens = [1, 2, 3, 4]

for (let item of itens) {
	console.log(item)
}

// 1
// 2
// 3
// 4
```
-> Oque acontece por trás dos panos é algo como:
```javascript
for (let i = 0; i < itens.length; i++) {
	let item = itens[i];
	console.log(item);
}
```


## Iterators and iterables
-> O motivo por que arrays, strings, sets, maps consegue ser utilizados com o for...of é por causa que todos são consideraveis iterables
 -> **Iterable** é algo que pode ser iterado
-> **Iterator** é um objeto que pode performar iteração sobre uma sequência, um objeto que implementa o **iterator protocol**

-> O Interpretador usa esse objeto iterator para performar a iteração sobre o data type que lhe é fornecido

#### Oque é **iterator protocol?**
-> É um simples conjunto de regras que devem ser obedecidas por um objeto para que ele possa ser chamado de iterator
-> O protocolo afirma que o objeto deve ter um método **next()**. Esse método return um objeto com as duas seguintes propriedades
	-> done: Valor boolean que indica se o iterator chegou no último valor
	-> value: O próximo valor de uma determinada sequência
-> Todo próximo valor na sequencia guardado dentro da propriedade **value** do objeto retornado pelo next() método. O fato de chegarmos ao fim da sequencia está armazenado na propriedade **done** do mesmo objeto.

#### Simples iterator

Como `for...of` funciona atrás dos panos com o iterator:
```javascript

var nums = [1, 5, 16];

for (
   // initialisation
   var iter = nums[Symbol.iterator](),
   next = iter.next(),
   num = next.value;

   // iterative check
   !next.done;

   // iterative expressions
   next = iter.next(),
   num = next.value
)

{
   console.log(num);
}

```

- Primeiro o loop chama o @@iterators no método nums e usa o iterator retornado para iterar sobre ele (salvo em iter)
- Chama next() no iter and salva o valor em uma variavel chamada next. next será usado para recuperar o `value` e a `done`
- Como num é corresponde a cada valor de nums ele é atribuito a variavel value da propriedade next
- Os últimos dois statements são apenas para resetar os valores de next e num para a próxima iteração