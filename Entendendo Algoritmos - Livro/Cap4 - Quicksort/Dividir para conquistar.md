Para utilizar o método de DC temos 2 passos:
1. Descobrir o caso base, que deve ser o caso mais simples possível.
2. Dividir ou diminuir o problema até ele se tornar o caso base

O algoritmo de DC não é um simples algoritmo que você aplica em um problema, mas sim uma maneira de pensar sobre o problema. Vamos ver mais um exemplo.


Exemplo de como o algoritmo/modo de pensar funciona.
- Temos um array de números [2, 3, 4]
- Preciso somar todos os números e retornar um total. Simples de ser feito com um loop.
```
public Integer somaArray(List<Integer> nums) {
	Integer total = 0;
	for (Integer x : nums) {
		total += x;
	}
	return total;
}
```

Como fazemos isso de forma recursiva?
**Passo 1:** Descobrir o caso-base. Qual é o array mais simples que posso obter? Array com 0 ou 1 elemento, sera muito simples calcular a soma.
![[Pasted image 20240103160826.png]]
**Passo 2:** Devemos chegar mais perto de um array vazio a cada recursão.
Como pode reduzir o tamanho do seu problema? Essa é uma alternativa:
![[Pasted image 20240103161032.png]]
Soma deste array é igual a isto:
![[Pasted image 20240103161048.png]]
Nos 2 casos o resultado é 12. Porém, na segunda versão estamos usando um array menor para a soma. Ou seja, estamos diminuindo o tamanho do problema.
![[Pasted image 20240103161145.png]]

Exemplo prático:
![[Pasted image 20240103161158.png]]![[Pasted image 20240103161239.png]]
## **Dica**
Quando estiver escrevendo uma função de recursão que envolva um array, ocaso-base será, muitas vezes, um array vazio ou um array com apenas um
elemento. Se estiver com problemas, use este caso como base.
