### Oque é um grafo?
Um modelo de grafo é um conjunto de conexões. Pensando em poker que Alex deve dinheiro a Rama, seria algo assim:
![[Pasted image 20240205184732.png]]
Cada grafo é constituído de *vértices e arestas.*
![[Pasted image 20240205184805.png]]
Isso é tudo. Grafos são formados por vértices e arestas, um vértice pode ser diretamente ligado a muitos outros vértices, ai os chamamos de vizinhos.
Grafos são uma maneira de modela como eventos diferentes estão conectados entre si.

### Pesquisa em largura
Esse algoritmo nos ajuda a responder duas perguntas:
1. Existe algum caminho do vértice A até o vértice B?
2. Qual o caminho mínimo do vértice A até o vértice B?
Na pesquisa em largura primeiro pesquisamos em nossos vértices vizinhos, vértices de primeiro grau, caso não haja resposta (encontremos oque procuramos) iremos pesquisar nos vértices de 2º grau, que são aqueles ligados em nossos vértices de 1º grau.
### Encontrando o caminho mínimo
Sempre iremos preferir as conexões de 1º grau, por serem diretas, dito isso não podemos pesquisar antes em uma conexão de 2º grau até termos certeza que oque procuramos não encontramos na conexão de 1º grau.
## Filas
Uma fila em estrutura de dados funciona exatamente da mesma maneira que uma fila na vida real.
![[Pasted image 20240205185825.png]]
Filas funcionam de como FIFO, First in First out, ou primeiro a entrar primeiro a sair.
