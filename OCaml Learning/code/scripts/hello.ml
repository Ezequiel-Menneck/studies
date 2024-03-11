#! /usr/bin/env ocaml

let some_function x y = (x * y) + x;;

let result = some_function 2 4

let () = Printf.printf "Resultado: %d \n" result

let soma2 = List.map (fun x -> x + 2) [1;2;3]

let result2 = soma2

let () = List.iter (fun x -> print_endline (string_of_int x)) result2

let () = List.iter (fun x -> print_endline x) ["a";"b"]

let quadrado n = n * 2

let result3 = List.map quadrado [1;2;3]

let rec conta = function
 | [] -> 0
 | x::xs -> 1 + conta xs

let rec print_list = function
  | [] -> ()
  | x::xs -> print_int x ; print_string " " ; print_list xs

let sum a b = a + b

let result4 = List.fold_left sum 0 ([1;2;3])
let () = print_endline "------------"
let () = Printf.printf "%d \n" result4

let result5 = List.init 4 (fun x -> x + 1)

let () = print_list result5

let string_list = ["a";"b"]

let rec print_string_list = function
  | [] -> ()
  | x::xs -> print_string x ; print_string " " ; print_string_list xs 

let () = print_string_list string_list

let square_of_sum n =
  let result = List.fold_left (+) 0 (List.init n (fun x -> x + 1)) in
    result * result
    

let sum_of_squares n =
  List.fold_left (fun acc x -> acc + x * x) 0 (List.init n (fun x -> x + 1))

let difference_of_squares _ =
    square_of_sum 1 - sum_of_squares 45