- Em Go não temos exceções
- Não temos try-catch-finally
- Existe uma gama de built-in funtions para a gente se recuperar de um erro exepcional. Recovery mecanismo só é executado como parte do estado da função.
- Lidar com erros imediatamente é legal, boa prática.  Se a função retorna N e um Erro na próxima linha já tratemos o erro

#### Typo erro
- É uma interface convencional para representar uma condição de erro, sendo o valor nil representado por não ter erro. err == nil? não temos erro
