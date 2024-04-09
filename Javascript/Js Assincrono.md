-> Precisamos utilizar Js de maneira assíncrona p evitar que em N casos nosso programa "trave" quando tivermos alguma tarefa que demore algum tempo. Como Js é single Thread ele usará a Thread toda p realizar a ação demorada, impossibilitando fazer outras coisas. Se utilizamos da api assíncrona isso não acontece, ele joga a tarefa de lado p resolver e podemos continuar mexendo no app numa boa.

## Promises
