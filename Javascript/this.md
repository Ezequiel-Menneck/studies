Em Javascript this é uma palavra que se refere a um **objeto**.
Qual objeto depende onde **this** é invocada (usada ou chamada)

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| Em um método de objeto, `this` refere-se ao **objeto**.                                    |
| Sozinho, `this` refere-se ao **objeto global**.                                            |
| Em uma função, `this` refere-se ao **objeto global**.                                      |
| Em uma função, no modo estrito, `this` é `undefined`.                                      |
| Em um evento, `this` refere-se ao **elemento** que recebeu o evento.                       |
| Métodos como `call()`, `apply()`, e `bind()` pode referir `this` para **qualquer objeto**. |

### This no método dentro de obj
Quando chamamos this em um método de um objeto o **this** se refere ao objeto como um todo.

```javascript
const obj = {
	name: 'robson',
	func = function() {
		return this;
	}
}

console.log(obj.func()) // {name: 'robson', func: [function]}
```

### This em uma função
Numa função o **objeto global** é a referencia do **this**
No navegador o objeto global é o **[Object window]**


### This em Event Handlers
Em html event handlers this se refere ao HTML elemento que recebeu o evento

### Binding de funções explicitas
As funções call() e apply() são predefinidas em js.
Ambas podem ser usadas a para chamar um método de um objeto com outro objeto como argumento, algo como:

```javascript
const pessoa = {
	name: 'eze',
	lastName: 'menneck',
	printFullname: function() {
		return this.name + " " + this.lastName
	}
}

const pessoa2 = {
	name: 'mike',
	lastName: 'stalone'
}

console.log(pessoa.printFullname.call(pessoa2)) // 'mike stalone'
```

### "Emprestando funções" (Function borring)
Com o método bind() conseguimos roubar uma função de outro objeto, algo como:

```javascript
const person = {
    firstName: 'rob',
    lastName: 'mike',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: 'Jorge',
    lastName: 'Silva'
}

let fullname = person.fullName.bind(member)
console.log(fullname()) // 'Jorve Silva'
```




### Call, Bind, Apply

Call - Chama a função do objeto que estamos mapendo, como:
```javascript
const person = {
	name: 'robson'
	printName: return this.name
}

const anotherPerson = {
	name: 'eduardo'
}

console.log(person.printName.call(anotherPerson))
```
nesse caso o .call() vais nos aplicar a função printName do objeto person no objeto anotherPerson resultando em 'eduardo' no console.

Bind - Copia uma função de um objeto para algo que queremos, algo como:
```javascript
const person = {
	name: 'robson'
	printName: return this.name
}

const anotherPerson = {
	name: 'eduardo'
}

let nameOfAnotherPerson = person.printName.bind(anotherPerson));
console.log(nameOfAnotherPerson())
```
Nesse caso nameOfAnotherPerson virou uma função copiada de printName do objeto person com o parametro de anotherPerson aplicado, que seria o this pegando o nome no print que é oque foi definido em person.

Apply - Assumimos que é a mesma coisa que o Call, com a diferença que ao invés de aceitar uma penca de argumentos o segundo argumento dele é um array que pode conter N elementos dentro, algo como:
```javascript
function greetLang(greeting, lang) {
  if (lang == "EN") console.log(`${greeting} English to ${this.name}`);
  if (lang == "ES") console.log(`${greeting} Spanish ${this.name}`);
}

const person4 = {
  name: "robson",
};

greetLang.apply(person4, ["OP", "EN"]); // OP English to robson
greetLang.apply(person4, ["OP", "ES"]); // OP Spanish to robson
```


### This -> Notas a parte
