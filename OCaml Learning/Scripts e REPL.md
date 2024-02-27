Como em Python podemos escrever scripts e executa-los usando o interpretador `ocaml` que instalamos em nossa maquina.

Para executar nossos scripts apenas precisamos cria-los com .ml no final e utilizarmos o comando `ocaml <nome_script.ml>`

### Criando scripts executáveis 

Como em Python podemos passar o caminho do binário responsável por interpretar noss script como diretiva ao UNIX. Pra isso adicionamos as diretivas `#! /usr/bin/env ocaml` na linha 1 do arquivo script.
Após isso daremos as permissões p o arquivo ser executavel com
`chmod 755 <nome_do_arq.ml>`
Agora podemos executa-lo como ./nome-do-arq.ml

### Carregando scripts no REPL
Para isso criamos nosso script normalmente, como script.ml, definimos algo lá dentro como uma função simples, let some_function x y = (x * y) + x;;
Para carregar isso no REPL só abrimos ele normal digitando ocaml no terminal e utilizamos o comando `#use`
`#use "script.ml"`;;
Já podemos usar a função criada