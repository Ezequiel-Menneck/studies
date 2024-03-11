# Como funcionam arquivos em OCaml

Podemos chamar o código de outro arquivo em OCaml que esteja na mesma pasta em outro usando a palavra **open** (mesma ideia do import do JS aparentemente), OCaml irá tratar o nome do arquivo como um módulo.

Temos o arquivo **sum.ml** que contem uma função que soma números e desejamos usar no nosso **main.ml**, podemos fazer algo como:

**sum.ml**
`let add x y = x + y`
**main.ml**
```ocaml
open Sum

let () = 
	let result = add 2 3 in
	print_endline (string_of_int result);
```

Compilando e rodando o código teremos 5 como resultado.