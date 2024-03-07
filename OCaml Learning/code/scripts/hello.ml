#! /usr/bin/env ocaml

let some_function x y = (x * y) + x;;

let result = some_function 2 4

let () = Printf.printf "Resultado: %d \n" result

let funcao = List.map (fun x -> x + 2) [1;2;3]

let rec conta = function
 | [] -> 0
 | x::xs -> 1 + conta xs

let rec print_list = function
  | [] -> ()
  | x::xs -> print_int x ; print_string " " ; print_list xs


let square_of_sum n =
  let result = List.fold_left (+) 0 (List.init n (fun x -> x + 1)) in
    result * result
    

let sum_of_squares n =
  List.fold_left (fun acc x -> acc + x * x) 0 (List.init n (fun x -> x + 1))

let difference_of_squares _ =
    square_of_sum 1 - sum_of_squares 45