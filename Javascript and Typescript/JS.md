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
