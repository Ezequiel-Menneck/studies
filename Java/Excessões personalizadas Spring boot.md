1. Services -> Exceptions
	Para o primeiro passo criamos um folder dentro de com  **services** com o nome de **exceptions** 
	Dentro desse novo folder será onde criamos a exceção do *type* desejado
	Para criar esse arquivo de exceção criamos uma Classe Java normal extendendo **extends** RuntimeException/Exception 
	Ex.:  `public class ResourceNotFoundException extends RuntimeException`
	Realizado a criação da classe criaremos um construtor básico recebendo como parametros uma String, Int, Double, Object, depende oque desejamos tratar, feito isso chamamos a super classe com  `super()` passando a mensagem personalizada junto do parametro que instanciamos

2. Resources -> Exceptions
	Nessa parte precisamos de pelo menos 2 Classes diferentes para seguir o processo de criação de erros personalizados
	2. O primeiro a criamos será o **StandarError** (nome pode ser escolhido como desejar), onde terá todo o padrão de informações que queremos que seja exibido no nosso tratamento de erro personalizado
		1. Criaremos as variaveis com os nomes desejados, como por Ex.: status, error, message, path, fica a preferencia do desenvolvedor. 
		2. Criação dos 2 construtores, um padrão sem argumentos e outro com as variaveis antes declaradas
		3.  Criação dos getters e setters para as respectivas variaveis.
	2. O segundo arquivo a criamos será o ResourceExceptionHandler (nome pessoal, definido pelo dev) nele que teremos as capturas das exceções e direcionaremos para a nossa personalizada. Nesse arquivo precisamos colocar o decorator de `@ControllerAdvice` do SpringBoot, ele fará o trabalho de capturar as exceções do sistema. Também criaremos os métodos onde informamos o tratamento adequado para cada exceção lançada.
		1. Criação do método para captura de exceção
			1. Para criação deste método previamente precisamos colocar o decorator de `@ExceptionHandler(ResourceNotFoundException.class>)`, dentro dos () do Decorator informamos qual será a exceção personalizada para o tratamento, nesse caso será a do exemplo anterior
			2. Declaramos o método como **public** com o *type* de `ResponseEntity<StandardError>` (StandardError é o nome da classe préviamente criada como modelo do erro, pode ser o *type* que você desejar, vai do nome da classe escolhida) após isso temos o nome do método **resourceNotFound** com seus respectivos parametros. De padrão colocamos um que seja do *type* da exceção que estamos tratando `ResourceNotFoundException` e outro do *type* *HttpServletRequest*, ficando deste modo - 
			   `public ResponseEntity<StandardError> resourceNotFound(ResourceNotFoundException e, HttpServletRequest request)`
			3. Dentro do corpo do método instanciaremos nossas informações necessárias para instanciarmos o Objeto de __StandardError__, sendo: 
				- String error = "Mensagem personalizada";
				-  HttpStatus status = HttpStatus.BAD_REQUEST; (Após o . várias opções estarão disponíveis, basta escolher a que melhor se encaixa com o erro)
				- StandardError err = new StandardError(status.value(), error, e.getMessage(), request.getRequestURI());
			    Feito isso retornamos o status e body que setamos a pouco com -> `return ResponseEntity.status(status).body(err);`

~~~java
@ControllerAdvice  
public class ResourceExceptionHandler {  
  
    @ExceptionHandler(ResourceNotFoundException.class)  
    public ResponseEntity<StandardError> resourceNotFound(ResourceNotFoundException e, HttpServletRequest request) {  
        String error = "Resource not found";  
        HttpStatus status = HttpStatus.NOT_FOUND;  
        StandardError err = new StandardError(status.value(), error, e.getMessage(), request.getRequestURI());  
        return ResponseEntity.status(status).body(err);  
    }
}
~~~