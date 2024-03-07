Cada algoritmo na programação dinamica começa em uma tabela.

Imagine que você seja um ladrão que esteja em um mercado. Você pode
roubar pacotes de lentilhas e arroz, e caso não seja possível roubar o pacote
inteiro, existe a possibilidade de abrir o pacote e pegar a quantidade que
você conseguir roubar. Logo, não é mais tudo ou nada, pois é possível levar
uma fração de um item. Como você lida com isso usando programação
dinâmica?
Resposta: você não lida, pois não é possível. Com a programação dinâmica,
é tudo ou nada. Não há uma maneira de levar metade de um item.

Lidando com itens com interdependência
Imagine que você queira ir a Paris e tenha uma lista de coisas que deseja ver.
![[Pasted image 20240222192845.png]]
Visitar estes lugares demora bastante tempo, pois primeiro você deve viajar
de Londres a Paris, o que leva metade de um dia. Se você quiser visitar os
três lugares, precisará de quatro dias e meio.
Mas espere aí, isso não está correto. Você não precisa ir a Paris para visitar
cada item, pois, assim que você estiver na cidade, cada item deverá levar
apenas um dia. Dessa forma, o cálculo deveria ser um dia por item + meio
dia de viagem = 3,5 dias, e não 4,5 dias.
Portanto, se você colocar a Torre Ei el em sua mochila, o Louvre se tornará
mais “barato”, pois custará apenas um dia em vez de custar 1,5 dia (um dia e
meio). Como você modela estas situações em programação dinâmica?
Não é possível porque a programação dinâmica é uma ferramenta poderosa
para resolver subproblemas utilizando estas respostas para resolver um problema geral. Porém a programação dinâmica só funciona quando os seus
subproblemas são discretos, ou seja, quando eles não são dependentes entre si.
Visto isso, não há maneira de levar em consideração as viagens a Paris
utilizando o algoritmo de programação dinâmica.

### Maior substring comum
• A programação dinâmica é útil quando você está tentando otimizar em
relação a um limite. No problema da mochila, era necessário maximizar o
valor dos itens roubados, limitados pela capacidade da mochila.
• Você pode utilizar a programação dinâmica quando o problema puder ser
separado em subproblemas discretos que não dependam um do outro.

Pode ser difícil encontrar uma solução com programação dinâmica. Algumas dicas gerais são:
• Toda solução de programação dinâmica envolve uma tabela.
• Os valores nas células são, geralmente, o que você está tentando otimizar.
Para o problema da mochila, os valores nas células eram os valores dos
itens.
• Cada célula é um subproblema, portanto, pense em como você pode
dividi-lo em outros subproblemas, pois isso lhe ajudará a descobrir quais
são os seus eixos.

Para montar a tabela para resolver um problema com programação dinâmica devemos responder as seguintes perguntas. Você deve responder às seguintes
perguntas:
• O que são os valores das células?
• Como é possível dividir este problema em subproblemas?
• O que são os eixos da tabela?
Em programação dinâmica, tenta
