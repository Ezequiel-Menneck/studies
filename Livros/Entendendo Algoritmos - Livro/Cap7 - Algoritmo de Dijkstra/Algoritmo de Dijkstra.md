Ele tem quatro etapas
1. Encontrar o vértice mais "barato". Este é o veertice em que conseguimos cegar em menos tempo possível
2. Atualiza o custo dos vizinhos desse vertice
3. Repita até que tenha feito isso para cada vértice do grafo.
4. Calcular o caminho final

Quando trabalhamos com o algoritmo de dijkstra cada aresta do grafo tem um número associado a ela. São chamados de pesos.
![[Pasted image 20240220194634.png]]

Um grafo com peso é chamado de *grafo ponderado* (também chamado de grafo valorado). Um grafo sem pesos é chamado de *grafo não ponderado* (também chamado de grafo não valorado).
![[Pasted image 20240220194733.png]]
Para calcular o caminho mínimo de um grafo não ponderado, utilizamos a pesquisa em largura. Já para calcular o caminho mínimo em um grafo ponderado utilizamos o algoritmo de dijkstra. Além disso grafos também podem conter ciclos que se parecem com isso.
![[Pasted image 20240220194921.png]]
Ciclos indicam que é possível começar em um vértice, viajar ao redor dele e
terminar no mesmo vértice. Por exemplo, suponha que esteja tentando
achar o caminho mínimo deste grafo, o qual contém um ciclo.
![[Pasted image 20240220195032.png]]
Porém, cada vez que você o seguir, estará apenas adicionando 8 no peso
total. Logo, seguir o ciclo jamais fornecerá o caminho mínimo.
![[Pasted image 20240220195410.png]]
Um grafo não direcionado indica que dois vértices podem apontar um para
o outro. Ou seja, um grafo não direcionado é um ciclo!
![[Pasted image 20240220195430.png]]

### Adquirindo um piano
![[Pasted image 20240220213350.png]]
Nesse grafo os vértices são todos os itens q podemos trocar.
Antes de começar fazemos uma tabela com custo de cada vértice, registrando quanto gasta p chegar até cada um.
![[Pasted image 20240220213432.png]]
Continuaremos atualizando a tabela conforme o algoritmo for rodando.
Também será necessário uma coluna pai na tabela
![[Pasted image 20240220213509.png]]

**Passo 1** - Encontrar o vertice mais barato. Nesse caso, o pôster é a troca mais barata pois tem custo 0.
**Passo 2** - Descubra o custo p chegar nos vizinhos do poster. 
![[Pasted image 20240220213724.png]]
Temos preços para o baixo e para a bateria na tabela. Os valores foram registrados na tabela quando passamos pelo poster. Logo o poster é definido como pai desses itens.
![[Pasted image 20240220213821.png]]
**Passo 1 novamente** - O LP é o próximo vertice mais barato, pois custa 5.
**Passo 2 novamente** -  Atualiza os valores dos vizinhos
![[Pasted image 20240220213924.png]]
Atualizamos o preço da bateria e do baixo, isso significa que é mais barato chegar até a bateria e até o baixo seguindo a aresta do LP.
Então colocamos o LP como o pai desses dois instrumentos.
O Baixo é o proximo item mais barato, então atualizamos os vizinhos.
![[Pasted image 20240220214120.png]]
Agora temos o preço do piano caso o troquemos pelo baixo. Portando definimos o baixo como pai (A imagem acima está errada, onde ta bateria deveria ser baixo)
![[Pasted image 20240220214208.png]]
Podemos conseguir um valor ainda menor no piano caso troque-o pela bateria. A série de troca mais barata custará 35

Trocas que precisam ser feitas
![[Pasted image 20240220214252.png]]


### Arestas com pesos negativos
![[Pasted image 20240220214324.png]]
![[Pasted image 20240220214706.png]]
A grosso modo o algoritmo não consegue achar o caminho mais curto de 33 por causa do número negativo. Para isso existe outro algoritmo chamado: **Bellman-Ford**.

### Implementação
Grafo de exemplo:
![[Pasted image 20240220220123.png]]
Precisaremos de 3 tabelas Hash
![[Pasted image 20240220220141.png]]
As tabelas hash relativas ao custo e aos pais seram atualizadas conforme o algoritmo for executado. Porém, antes disso é necessário implementar o grafo.

**Recapitulando**
• A pesquisa em largura é usada para calcular o caminho mínimo para um
grafo não ponderado.
• O algoritmo de Dijkstra é usado para calcular o caminho mínimo para
um grafo ponderado.
• O algoritmo de Dijkstra funciona quando todos os pesos são positivos.
• Se o seu grafo tiver pesos negativos, use o algoritmo de Bellman-Ford.