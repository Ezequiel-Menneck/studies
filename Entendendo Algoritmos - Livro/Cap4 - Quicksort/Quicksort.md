![[Pasted image 20240103175229.png]]
Arrays vazios ou arrays com apenas um elemento são o caso-base.
Podemos apernas retorna-los como eles estão, já que não tem nada para ordenar.

Arrays com 2 elementos também são simples de ordenar.
![[Pasted image 20240103175518.png]]

Já arrays com mais de 3 elementos é um pouco diferente. Estamos utilizando DC, estão quebramos o array até chegar no caso-base. O funcionamento do quicksort segue essa lógica: primeiro, escolher um elemento do array, ele será o pivô.
Após isso encontraremos os elementos menores e os maiores que o pivô.
![[Pasted image 20240103175653.png]]
Isso é chamado de particionamento. Desse modo temos:
- Um subarray contendo os números menores que o pivo
- O pivo
- Um subarrey contendo os números maiores que o pivo.
Os dois subarrays não estão ordenados, apernas particionados. Porém, se eles estivessem ordenados, a ordenação do array contendo todos os elementos seria simples.
Caso eles estejam ordenados podemos combiná-los dessa forma: 
SubarrayMenores + pivô + SubarrayMaiores. [10, 15] + [33] + [] = [10, 15, 33]

Como podemos ordenar os subarrays? O caso-base do quicksort consegue ordenar arrays de dois elementos (o subarray esquerdo) e também arrays vazios (subarray direito). Assim, se utilizar o quicksort em ambos os subarrays e então combinar os resultados, teremos um array ordenado.

## Recap

- A estratégia DC funciona dividindo o problema em problemas menores. Lidando c arrays o caso base sera um array vazio ou um array de 1 elemento.
- Para quicksort escolher elemento aleatório como pivo. Tempo médio de exec é O(nlogn)
- Constante em Big O pode ser relevante as vezes.

