## Função hash
Realiza uma busca de O(1) para a gente

A função hash mapeia consistentemente um "Nome" para um mesmo índice.
A primeira execução da função hash verifica onde é possível armazenar o valor do "nome" depois disso é usada p retornar esse valor
A função hash não sabe o tamanho do seu array, apenas retorna índices validos.

## Colisão

- Quando duas chaves são indicadas pro mesmo espaço temos colisão.
- Para solucionar isso podemos mapear uma lista encadeada pra esse espaço List<> do java.
- Nesse caso de utilizar listas, se a lista ficar mto grande o tempo da tabela hash aumentara bem, por causa da lista. Isso não ocorre se utilizar a função hash decentemente.

## Desempenho
- Tabelas Hash tem tempo de execução constante, não importa o tamanho da tabela sempre será o mesmo tempo.
![[Pasted image 20240130191056.png]]

Tempos de execução Tabela Hash VS Array
![[Pasted image 20240130191152.png]]
- No melhor caso ela é melhor que arrays e listas, porém no pior caso consegue ser pior q ambos.
- Sempre evitar colisão ao usar tabela hash
- Para evitar colisões é necessário:
	- Baixo fator de carga
	- Boa função Hash

## Fator de carga
- Tabelas hash utilizam o array p armazenamento, p contar a carga contamos os espaços utilizados no array
- Se uma tabela hash tem 100 chaves e ela tem 100 espaços o fator de carga é 1, caso ela tenha apenas 50 espaços o fator de carga é 2
- Uma carga mais q 1 indica que temos mais itens que espaços no array
- Quando a tabela começa a ficar com pouco espaço precisamos redimensionala, para isso:
	- Criamos um array novo
	- Adicionamos os itens da tabela antiga na tabela nova
- Regra p redimensionar pode ser quando a carga for maior q 0,7
- Redimensionar é caro e não deve ser feito com frequencia
