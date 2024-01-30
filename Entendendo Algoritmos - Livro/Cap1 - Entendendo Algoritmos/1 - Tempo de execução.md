![[Pasted image 20231210163016.png]]
A notação Big(O) informa o quão rapido é um algoritmo. Tendo uma lista de tamanho N o tempo de execução na notação BIg O é O(n).
![[Pasted image 20231210163710.png]]
A notação Big O leva em consideração o pior das hipóteses. Então pode dizer que, para o pior caso, analisamos cada item de uma lista. Esse é o tempo O(n). É uma garantia, sabemos com certeza que esse será o tempo máximo da pesquisa simples.
![[Pasted image 20231210164116.png]]

Pontos principais:
- A rapidez de um algoritmo não é medida em segundos, mas pelo crescimento do número de operações.
- Quão rapido o tempo de execução de um algoritmo aumenta conforme o número de elementos aumenta.
- O tempo de execução em algoritmos é expresso na notação Big O.
- O(logn) é mais rápido do que O(n) e O(logn) fica mais rapido conforme a lista aumenta.

EXERCÍCIOS
Forneça o tempo de execução para cada um dos casos a seguir em termos da
notação Big O.
1.3 Você tem um nome e deseja encontrar o número de telefone para esse
nome em uma agenda telefônica.
R - O(logn)
1.4 Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica. (Dica: Deve procurar pela agenda inteira!)
R - O(n)
1.5 Você quer ler o número de cada pessoa da agenda telefônica.
R - O(n)
1.6 Você quer ler os números apenas dos nomes que começam com A. (Isso
é complicado! Esse algoritmo envolve conceitos que são abordados mais
profundamente no Capítulo 4. Leia a resposta – você cará surpreso!)
