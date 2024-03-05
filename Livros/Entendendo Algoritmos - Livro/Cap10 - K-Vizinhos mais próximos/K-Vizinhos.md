- Como construir um sistema de classificação utilizando o algoritmo dos k-vizinhos mais próximos.
- Extração de características
- Regressão: Como prever um número, como estará o valor da bolsa de valores amanhã ou quanto um usuário gostara de um filme.
- Reconhecer casos em que deveremos usar o k-vizinhos mais próximos e também as limitações.

### Sistema de recomendações
Sou o dono da netflix e quero criar um sistema de recomendações de filmes para os usuários.
Criamos um grafico com todos os usuários
![[Pasted image 20240224185234.png]]
Esses usuários são agrupados por similaridades, ou seja, usuários com gostos similares são colocados próximos uns dos outros.
Queremos recomendar filmes p Priyanka. P isso encontramos cinco usuários mais próximos a ela.
![[Pasted image 20240224185330.png]]
Justin, JC, Joey, Lance e Chris têm gostos similares para lmes. Logo,
qualquer lme que eles gostem Priyanka provavelmente gostará!
Feito este grá co, será fácil criar o sistema de recomendações. Se Justin
gostou de um lme, recomende este lme para Priyanka.
![[Pasted image 20240224185350.png]]
Mas ainda está faltando uma parte importante: você agrupa os usuários por
similaridade, mas como faz para descobrir o quão semelhante dois usuários
são?

### Extração de características.
Suponha que você esteja comparando usuários do Netfix. Para isso é
necessário criar o grá co de usuários de alguma maneira e converter cada
usuário em um conjunto de coordenadas, assim como fizemos com a fruta.
![[Pasted image 20240224185558.png]]
Estando no gráfico conseguimos medir a distancia entre eles.
Quando os usuários se cadastram na netflix fazemos os avaliar algumas categorias de acordo o quanto eles gostam delas.
Dessa maneira, é possível converter os usuários em números.
Pada cada usuário teremos um conjunto de notas!
![[Pasted image 20240224185711.png]]
![[Pasted image 20240224185728.png]]
Ao invés de calcular a distancia de duas dimensões agora estamos calculado a distância de 5 dimensões, porém, a formula mantem-se a mesma.
![[Pasted image 20240224185811.png]]
“O que a distância significa quando temos cinco números?”. A distância informa a similaridade entre estes conjuntos.
![[Pasted image 20240224185857.png]]
Aqui temos a distância entre Priyanka e Justin.


### Regressão
Queremos adivinhar a nota que Priyanka dará para X filme. Pegamos 5 pessoas próximas dela.
Como Justin, Jc, Joey, Lance e Chris avaliaram o filme?
![[Pasted image 20240224193206.png]]
Seria possível utilizar a média das avaliações deles, que é 4,2 estrelas. Isso que chamamos de regressão. São as duas coisas básicas que faremos com o algoritmo dos k-vizinhos mais próximos: classificação e regressão.
- Classificação = classificar em grupos
- Regressão = Adivinhar uma resposta (número por ex).

### Recapitulando
- O algoritmo dos k-vizinhos mais próximos é utilizado na classificação e regressão.
- Classificação = Classificar em grupos
- Regressão = Adivinhar uma resposta (como um número).
- Extrair características significa converter um item (como uma fruta ou um usuário) em uma lista de números que podem ser comparados
- Escolher boas características é parte importante para que um algoritmo dos k-vizinhos mais próximos opere corretamente.
