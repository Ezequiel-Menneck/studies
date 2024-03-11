**List.iter** itera sobre uma lista de N type (OCaml interfere o tipo e faz a boa para a gente), exemplo:
`List.iter (fun x -> print_endline (string_of_int x) [1;2;3;4]`
Sendo o resultado da função:
1
2
3
4

**List.map** aplica uma função (anonima ou não, depende) sobre uma lista que passarmos, exemplo:
```ocaml
let triplo x = x * 3

List.map (fun x -> x * 2) [1;2;3]
List.map triplo [1;2;3]
```


**List.fold_left** me parece muito com um reduce, pode receber uma função como (+) ou algo que inventarmos, um valor inicial para o resultado dela, 0 por exemplo, e uma lista de 'a tipo, exemplo;
```ocaml
let result = List.fold_left (+) 0 [1;2;3]
let () = Printf.printf "%d \n" result
```
Isso printara a soma dos números do array, 6

**List.init** Inicia uma lista de com N elementos e aplica uma função em cima desses N elementos, exemplo:
```ocaml
let list_with_list_init = List.init 5 (fun x -> x + 1)
```
Nesse caso o valor de list_with_list_init será: [1; 2 ; 3; 4; 5]
