
### Dois modos de pensar
-> Escrevendo uma função de `pow(x, n)` X será um natural e N a potencia.
```javascript
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
```

Temos dois modos de implementar isso:
- Interativo com for lop:
```javascript
  // Interactive way
function pow(x, n) {
    result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 2));
// 4
```
- Recursivo, simplificando a tarefa chamando ela mesma:
```javascript
// Recustive way
function pow2(x, n) {
    if (n === 1) {
        return x;
    }

    return x * pow2(x, n - 1);
}

console.log(pow2(2, 2));
console.log(pow2(2, 3));

// pow2(2, 3) = 2 * pow2(2, 2)
// pow2(2, 2) = 2 * pow2(2, 1)
// pow2(2, 1) = 2

// pow2(2, 3) = 2 * 4
// pow2(2, 2) = 2 * 2
// pow2(2, 1) = 2

function reverseString(str) {
    if (str.length <= 1 || str === null) {
        return str
    }

    return reverseString(str.substring(1)) + str.charAt(0)
}

console.log(reverseString("mike"))

// reverseString("mike") = reverseString("ike") + "m"
// reverseString("ike") = reverseString("ke") + "i"
// reverseString("ke") = reverseString("e") + k
// reverseString("e") = "e"

// reverseString("mike") = "ekim"
// reverseString("ike") = "ek" + "i"
// reverseString("ke") = "e" + "k"
// reverseString("e") = "e"
```
***(Note):*** Consigo fazer uma analogia a aquela esquema de matemática de ir descobrindo a forma mais básica de uma função, que seria a ideia do "caso base" acredito eu, ao achar o caso básico conseguimos ir substituindo os valores pros casos mais "acimas" como consta acima.

-> Quando chamamos pow2(x, n) a execução é separada em 2 direções
```javascript
              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
```
1. Se `n === 1` tudo é trivial. Isso é chamado a base da recursão, porque produz o resultado óbvio, `pow2(x, 1)` é igual a `x`
2. Por outro lado podemos representar `pow2(x, n)` como `x * pow2(x, n - 1)`. Em matemática é escrito como `xn = x * xn-1`. Isso é chamado de um passo recursivo, transformamos a tarefa em uma simples ação (multiplicar por x) e simplesmente chamamos a tarefa (pow2 com n menor).
