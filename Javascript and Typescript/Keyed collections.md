
## Map

-> É um objeto simples de key/valeu (bem parecido com um objeto normal, porém, ganha na performance) que podemos iterar nos elementos pela ordem de adição.

-> Simples exemplo de como o Map pode ser operado. Podemos usar o `for .... of` para retornar um array de `[key, value]`.

```javascript
const myMap = new Map();
```

### Map VS Object

-> Map sobre o objeto tem algumas vantagens o tornando um pouco melhor, como:
- Em um `Object` as keys são "strings" ou "symbols" porém no Map pode ser qualquer coisa.
- Podemos pegar  o `size` do `Map` facilmente, enquanto do `Object` precisamos pegar manualmente.
- A iteração do Map é pela ordem de adição dos elementos.

-> Dicas para decidir usar `Map` ao invés de `Object`
- Usar Map ao invés de objeto quando as Keys são desconhecidas em run time e quando todas as key e values são do mesmo type
- Usar Map quando precisamos guardar a Key como seu valor primitivo mesmo, já que o Object trata as Keys como string independente do tipo delas, string, boolean, number.
- Usar objetos quando houver logica para operar em elementos individuais

## Set

-> `Set` objeto é uma coleção de valores únicos. Podemos iterar sobre os elementos na ordem de inserção. 

-> O código a seguir mostra as básicas operações com `Set`
```javascript
const mySet = new Set(); 

mySet.add(1)
mySet.add("bar")
mySet.add("foo")
mySet.add("bar")
  
mySet.has(1) // true
mySet.delete("foo")
mySet.size  // 2 because mySet only add "bar" one time,
			// because he is only add unique keys

  

for (const item of mySet) {
	console.log(item)
}

console.log(mySet.size)
// 1
// "bar"
```

### Convertendo um Set para Array

-> Podemos criar um Array a partir de um Set usando `Aray.from()` ou com spread syntax. De outro lado Set também aceita um array para converter.

```javascript
const myArr = Array.from(mySet)
const myArr2 = [...mySet]

console.log(myArr) // [ 1, 'bar' ]
console.log(myArr2) // [ 1, 'bar' ]
```

### Array e Set comparados.

-> Em muitos casos um Set de elementos pode ser armazenado em Arrays em Js, porém, Set as vezes tem umas vantagens:
- Deletar elementos do Array pelo valor é bem lento `arr.splice(arr.indexOf(val), 1)`
- Set permite deletar elementos pelo seu valor, enquanto array não e precisamos fazer um `splice` baseado no index do elemento.
- Valor `NaN` não pode ser achado com indexOf em um array.
- Set guarda apenas valores unicos. Não precisamos manualmente trackear os duplicados.