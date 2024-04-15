-> Precisamos utilizar Js de maneira assíncrona p evitar que em N casos nosso programa "trave" quando tivermos alguma tarefa que demore algum tempo. Como Js é single Thread ele usará a Thread toda p realizar a ação demorada, impossibilitando fazer outras coisas. Se utilizamos da api assíncrona isso não acontece, ele joga a tarefa de lado p resolver e podemos continuar mexendo no app numa boa.

## Promises

-> A grosso modo podemos dizer que uma promise é uma maneira de simplificar a tarefa de escrever código complexo assíncrono. 
-> De modo mais técnico podemos dizer que uma promise é um objeto que representa o sucesso ou a falha de uma determinada operação, comumente uma operação assíncrona.

### Benefícios de usar Promises
-> Mitigamos os leveis extra de edentação
-> Error handling com promises é muito mais conciso e fácil de manter.
-> Faz o código parecer síncrono mesmo sendo assíncrono usando async/await

### Básico
-> Podemos criar uma Promise com o construtor Promise(), ele recebe 2 argumentos inicialmente, resolve e reject
-> Ao criamos uma Promise desse modo ao chamar ela não conseguimos fazer algo como minhaPromiseX() já que ela não é uma função, logo precisamos do .then()

### Método then()
-> É usado para executar a função que a promise será rejeitada ou resolvida.
-> then() aceita 2 argumentos
	-> Uma função para ser chamada quando a promise for fullfiled (deu boa)
	-> Uma função para ser chamada quando a promise for rejected (deu ruim)
->

#### Como o then() funciona de baixo dos panos?
