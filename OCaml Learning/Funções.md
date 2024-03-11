## Tipos de função
Declaração típica de função em OCaml
```ocaml
let quadrado x = x * x;;
```
E temos o seguinte retorno
```ocaml
val quadrado : int -> int = <fun>
```
Essa é nossa **assinatura da função**. Quando começamos a ler uma assinatura de função o primeiro valor que nos importa é o tipo após a última flecha que é o tipo de retorno da função e então todos os valores anteriores a última flecha são os tipos dos parâmetros que a função recebe. Essa assinatura pode ser lida como _a função quadrado recebe um parâmetro do tipo inteiro e retorna um valor do tipo inteiro_.

### Funções de alta ordem
São as funções que recebem uma função como parametro ou as que retornam uma função. Um exemplo é a função List.map porque o seu primeiro argumento é uma função, sua assinatura é:
```ocaml
List.map;;
(* - : ('a -> 'b) -> 'a list -> 'b list = <fun> *)
```
Além disso List.map é uma **função polimórfica** já que 'a e 'b são tipos não definidos (unconstrained types) que podem ser substituidos por qualquer outro tipo concreto. Esse tipo de polimorfismo é chamado de **polimorfismo paramétrico** (parametric polymorphism), isso basicamente significa que a função map por ser usada com valores inteiros, strings, árvores, outras listas, funções ou qualquer tipo customizado.

### Currying
Quando temos uma função com múltiplos argumentos podemos passar todos os argumentos de uma vez só ou podemos passar um de cada vez. Com currying isso não faz diferença, aplicando algumas, mas não todas as partes de uma função é chamado de aplicação parcial de funções.
Ex:
```ocaml
(* temos uma função que recebe dois argumentos x e y *)
let distancia x y = x - y |> abs;;
(* val distancia : int -> int -> int = <fun> *)

(* porem podemos "prender" um de seus argumentos em apenas um valor *)
let distanciaDe5 = distancia 5;;
(* val distanciaDe5 : int -> int = <fun> *)

(* perceba que a assinatura ficou de inteiro para inteiro, isso acontece porque o
   primeiro valor já foi aplicado *)

(* e agora podemos chamar essa função passando o segundo argumento de distancia *)
distanciaDe5 1;;
(* - : int = 4 *)
```
Podemos demonstrar isso explicitamente quando chamamos uma função com múltiplos parâmetros:
```ocaml
(distancia 5) 6;;
(* - : int = 1 *)
```
Nesse caso o primeiro parênteses retornar uma função (distancia) com o primeiro parametro aplicado (5), então essa função recebe o segundo valor. Podemos dizer que isso é exatamente a chamada sem parenteses, logo:
```ocaml
((distancia 5) 6) = (distancia 5 6);;
```

### Função em prefixo e em infixo
Funções em prefixo (prefix functions) é uma forma regular como trabalhamos como funções e estamos acostumados, quando prefixamos colocamos o nome da função seguido dos parametros
```ocaml
distancia 5 2;;
(* - : int = 3 *)
```
Uma função em infixo (infix function) é também por vezes chamada de operador em OCaml, usa uma ordem diferente. Uma função com dois argumentos é um caso especial em que algumas vezes faz mais sentido que o nome da função esteja entre os argumentos. Um exemplo é a função +, que nos permite escrever expressões como 1 + 3.
```ocaml
1 + 3;;
(* - : int = 4 *)
```
Se quisermos utilizar em forma de prefixo seria algo como:
```ocaml
(+);;
(* - : int -> int -> int = <fun> *)

(+) 1 3;;
(* - : int = 4 *)
```
### Definindo funções em infixo
Para definir nossa função com infixo precisamos a definir a mesma com simbolos, ou seja, sem caracteremos alfanuméricos ou nomes, apenas simbolos e o "nome" deve estar entre parenteses.
```ocaml
(* função distância em infixo usando |><| como operador
   para identificar a função. *)
let (|><|) x y = x - y |> abs;;
(* val ( |><| ) : int -> int -> int = <fun> *)

3 |><| 2;;
(* - : int = 1 *)

(* podemos também ter múltiplas aplicações de distância *)
3 |><| 2 |><| 6;;
(* - : int = 5 *)
```
### Funções Lambda
Nem sempre queremos utilizar uma função no futuro, as vezes precisamos utiliza-la instantaneamente e só, por isso não precisamos de um identificador em funções lambdas. As funções declaradas sem um identificador são chamadas de **Funções anônimas ou Funções Lambdas**. É de preferencia que quando escrevemos uma função lambda que a mesma use a sintaxe mais concisa possível já que elas usualmente aparecem em uma única linha.
Para declaração começamos com a palavra reservada fun, argumentos, uma seta -> que separa os args do corpo da função e a declaração da função, ex;;
```ocaml
List.map (fun x -> x * x) [1;2;3];;
(* - : int list = [1; 4; 9] *)
```
Com multiplos argumentos funciona da mesma forma:
```ocaml
(fun x y -> x - y |> abs) 20 35;;
(* - : int = 15 *)
```

### Recursão
Uma função recursiva é uma função que contêm uma chamada a si mesma. A função de tamanho abaixo que retorna o tamanho de uma lista é recursiva. Observamos pela palavra **rec** que indica para o compilador de OCaml que essa função é recursiva e que é necessário que ele faça optimizações para esse caso. Também observamos na linha 3 a função chamar a si mesma
```ocaml
let rec tamanho = function
	| [] -> 0
	| _::xs -> 1 + tamanho xs;;
(* val tamanho : 'a list -> int = <fun> *)
```
Quando vamos escrever uma função recursiva o primeiro a pensar normalmente é o nosso **caso base**, nesse caso como retiramos um item da lista por repetição o caso base é a lista vazia. Após o caso base vamos p função de indução que é  como vamos chegar ao **caso base**, nesse caso retirando um item da lista a cada chamada.
Nessa função temos uma sintaxe nova, o **Pattern Matching** nos argumentos da função, algo muito comum em funções recursivas.
A função não possui nenhum parâmetro explicitamente, não precisamos de um identificador para cada argumento porque a única coisa que usamos é o próprio **Pattern Matching**. O que indica que essa função utiliza Pattern matching é a palavra function. Quando chamamos essa função o argumento passado é comparado a lista de possíveis argumentos, nesse caso: uma lista vazia ([]) ou uma lista com n elementos (\_::xs), o underscore é chamado de **wildcard** que corresponde a todos os valores possíveis, essa é uma comparação exaustiva já que cobre todos os casos possíveis de entrada, ou seja, a função recebe uma lista e essa lista apenas pode ser vazia ou possuir elementos, nenhum outro caso é possível.
No primeiro caso, lista vazia, já achamos o caso base e a função retorna 0. Outro caso é nosso caso recursiva, onde a lista é diminuida, o argumento \_::xs separa a lista atribuindo o primeiro elemento a  \_ (elemento chamada head / cabeça) e o resto da lista em xs (lista chamada tail / cauda) e então é retornado 1 somado ao valor retornado pela função tamanho recebendo a lista tail (xs) como argumento.
```ocaml
tamanho [1;2;5];;
(* - : int = 3 *)

(*
Como acontece:
tamanho [1;2;5]
    | 1::[2;5] -> 1 + tamanho [2;5]
 
tamanho [2;5]
    | 2::[5] -> 1 + tamanho [5]
 
tamanho [5]
    | 5::[] -> 1 + tamanho []
tamanho []
    | [] -> 0
tamanho [5]
    | 5::[] -> 1 + 0
tamanho [2;5]
    | 2::[5] -> 1 + 1
tamanho [1;2;5]
    | 1::[2;5] -> 1 + 2
// =>  val it : int = 3
*)
```
Outro exemplo é a recursão calculando fatorial.
```ocaml
let rec fatorial n =
	if n < 2 then
		1
	else 
		n * fatorial (n - 1)
```

### Piping / Canalização
Digamos que desejamos calcular o seno de 7, utilizamos a função sin passando 7 com um ponto para indicar q ele é float.
```ocaml
sin 7.;;
(* - : float = 0.656986598718789061 *)
```
Agora queremos fazer isso mas primeiro passando o valor e depois chamando a função, podemos fazer isso com o pipe operator (operador de canalização):
```ocaml
7. |> sin;;
(* - : float = 0.656986598718789061 *)
```
Qual a utilidade?
- Simplificar a chamadas de funções
- Fazer uma sequencia de chamadas de função uma após a outra recebendo o valor de saída da anterior
- Remover os parênteses de uma operação
Além disso conseguimos canalizar a saida de nossas funções para a proxima. Podemos também usar os backwards pipe operator (operador de canalização invertida) que basicamente passa o valor para a função declarada antes
```ocaml
(* em OCaml 4.01 ou anterior esse operador era <|, mas nas posteriores foi mudado para @@ *)
sin @@ 2. + 1.;;
(* - : float = 0.141120008059867214 *)
```
Além disso podemos usar os pipe operator ao mesmo tempo, o que deixa a sintaxe de uma função com dois valores similar a uma função em infixo:
```ocaml
(* função min recebe 2 int e retorna o menor entre eles *)
(min);;
(* - : 'a -> 'a -> 'a = <fun> *)

min 10 5;;
(* - : int = 5 *)

(* usando ambos pipe operators *)
7 |> min @@ 2;;
(* - : int = 2 *)
```
Para que seja possível canalizar uma saída de função ou valor é necessário que a função receba apenas um argumento.
```ocaml
3 7 |> min;;
(* Error: This expression has type int
          This is not a function; it cannot be applied. *)
```

### Composição de Funções

É quando conectamos a saída de uma de nossas funções a entrada de outra e armazenamos isso em outra função. Exemplo, temos uma função que recebe um argumento do tipo 'a e que retorna um valor de tipo 'b e que temos uma terceira função que recebe o tipo 'b e retorna 'c, logo compomos uma nova função que mapeia de 'a para 'c.

```ocaml
(* funções de composição*)
let (<<) f g x = f(g(x));;
let (>>) f g x = g(f(x));;

(* funções exemplo *)
let menos x y = x - y |> abs;;
(* val menos : int -> int -> int = <fun> *)

let menos1 = menos 1;;
(* val menos1 : int -> int = <fun> *)

let vezes x y = x * y;;
(* val vezes : int -> int -> int = <fun> *)

let vezes2 = (vezes) 2;;
(* val vezes2 : int -> int = <fun> *)

(* funções aplicadas *)
menos1 9;;                    
(* - : int = 8 *)

vezes2 8;;
(* - : int = 16 *)

(* redirecionamento *)
let menos1EntaoVezes2 = vezes2 << menos1;;
(* val menos1EntaoVezes2 : int -> int = <fun> *)

menos1EntaoVezes2 9;;
(* - : int = 16 *)

let vezes2EntaoMenos1 = vezes2 >> menos1;;
(* val vezes2EntaoMenos1 : int -> int = <fun> *)

vezes2EntaoMenos1 9;;
(* - : int = 17 *)
```