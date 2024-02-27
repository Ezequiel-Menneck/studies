### Como faço p saber se um problema é NP-Completo?

Não há maneira fácil de dizer se o problema em que estamos trabalhando é NP-Completo.
Indicativos:
- Seu algoritmo roda rápido para alguns itens, mas fica muito lento com o aumento de itens.
- "Todas as combinações de X" geralmente significam um problema Np-completo
- Temos de calcular "cada possível versão" de X porque não pode dividir em subproblemas menores? Talvez seja Np-completo
- Se o problema envolve um conjunto (como um conjunto de estações de rádio) e é dificil de resolver, ele pode ser um problema Np-completo.
- Você pode reescrever o seu problema como o problema de cobertura mínima de conjuntos ou o problema do caixeiro-viajante? Então é definitivamente Np-completo.

### Recapitulando
- Algoritmos gulosos otimizam localmente na esperança de acabar em uma otimização global.
- Problemas Np-completos não tem solução rápida
- Se estivermos tentando resolver um problema Np-completo, o melhor a fazer é usar um algoritmo de aproximação
- Algoritmos gulosos são fáceis de escrever e tem tempo de execução baixo. portanto são bons algoritmos de aproximação.
- 