// Não conseguimos ter acesso aos argumentos passados pelo `arguments` 
const myFunc = (a, b, c) => {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
};

myFunc(1, 2, 3);

// Conseguimos ter acesso aos argumentos passados pelo `arguments` 
function myFunc2(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

myFunc2(1, 2, 3);
