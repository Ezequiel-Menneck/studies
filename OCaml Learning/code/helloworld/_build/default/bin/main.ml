let () = print_endline "Hello, World!"

let rec oi : 'a list -> int = function 
  | [] -> 0
  | _::j -> 1 + oi j;;

let result: int = oi [1;2;3;4]


let soma x y = x + y

let amor = soma 3 4


let () = Printf.printf "Tamanho %d \n" result
let () = Printf.printf "Tamanho %d \n" amor
