### Oque é JWT?
O JSON Web Token (JWT) é um padrão aberto da Internet para compartilhar informações seguras entre duas partes. O token contém uma carga útil JSON assinada digitalmente (com uma chave privada ou pública) usando um algoritmo criptográfico. A assinatura digital torna o token a salvo de adulteração quando um token adulterado se torna inválido.

Um JWT se parece com isso: **eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.FG**

Se olharmos de perto veremos dois símbolos de período ( . ) no JWT. Esses símbolos de período dividem o JWT em três segmentos - **Cabeçalho, carga útil e assinatura**

A forma geral de um JWT é -> header.payload.signature

#### Cabeçalho
A primeira parte do token, é o cabeçalho de um objeto JSON contendo duas propriedades,
typ(representa o tipo do token que é JWT) e alg(o algoritmo usado para assinar).

```json
{  
	"typ": "JWT",  
	"alg": "HS256"  
}
```
Este JSON é codificado em Base64Url para formar a primeira parte da sequência.

#### Payload
A segunda parte do token, o payload contém os dados ou reivindicações, que você deseja transferir usando este JWT. Existem algumas reivindicações definidas como:
- sub - Assunto do token
- iss - Emissor do token
- exp - Tempo de expiração do token
- aud - Público do token

Podemos também adicionar reivindicações personalizadas com as quais as duas extremidades concordaram e fornecer informações extras sobre o token. No exemplo abaixo, "role" é uma reivindicação personalizada

```json
{  
	"sub": "john.doe@gmail.com",  
	"iss": "ABC Pvt Ltd",  
	"role": "ADMIN"  
}
```


#### Assinatura
A assinatura é criada pegando as strings codificadas das duas primeiras partes e passando-a para o algoritmo de assinatura junto com  segredo.

```
HMACSHA256(  
base64UrlEncode(header) + "." + base64UrlEncode(payload),  
secret  
)
```

## To do:

Estaremos construindo uma API REST que expõe três rotas:
1. `/api/auth/register`  - Cria e persiste um `User` entidade e responde com um JWT construído usando está entidade.
2. `/api/auth/login` - Autentica credenciais de usuário e gera um JWT
3. `/api/auth/info` - Rota protegida que responde com informações do usuário para o usuário autenticado

### Entity
Primeiro vamos criar a nossa entidade de usuário. Crie um novo pacote `entity` e criar uma classe `User` . Esta classe define o `User` com os campos de identificação, email e senha. O `@Entity` anotação marca essa classe como uma entidade e as outras anotações são anotações de Lombok para reduzir o código.

```java
@Entity  
@Getter  
@Setter  
@ToString  
@NoArgsConstructor  
@Table(name = "users")  
public class User {  
  
    @Id  
    @GeneratedValue(strategy = GenerationType.AUTO)  
    private Long id;  
  
    private String email;  
  
    @JsonProperty(access =  JsonProperty.Access.WRITE_ONLY)  
    private String password;  
  
}
```

**NOTA:** Oque impede que o campo de senha seja incluído na resposta JSON.`@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)`

### Repository
Agora com a entidade já criada iremos criar uma maneira de persisti-la. Criamos um pacote `Repository` e criamos uma interface `UserRepository`. Definimos um método personalizado `findByEmail(String email)` que recupera uma entidade de um usuário com base no seu email.

```java
public interface UserRepository extends JpaRepository<User, Long> {  
  
    public Optional<User> findByEmail(String email);  
  
}
```

### Segurança
Primeiramente vamos criar uma classe que lide com a criação e verificação dos JWTs. Criamos um pacote `Security` e nele uma classe `JWTUtil`. Para executar as operações relacionadas ao JWT usaremos o java-jwt package.

```java
@Component  
public class JWTUtil {  
  
    @Value("${jwt_secret}")  
    private String secret;  
  
    public String generateToken(String email) throws IllegalArgumentException, JWTCreationException {  
        return JWT.create()  
                .withSubject("User Details")  
                .withClaim("email", email)  
                .withIssuedAt(new Date())  
                .withIssuer("SimpleSpringSecurityJWT")  
                .sign(Algorithm.HMAC256(secret));  
    }  
  
    public String validateTokenAndRetrieveSubject(String token) throws JWTVerificationException {  
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secret))  
                .withSubject("User Details")  
                .withIssuer("SimpleSpringSecurityJWT")  
                .build();  
        DecodedJWT jwt = verifier.verify(token);  
        return jwt.getClaim("email").asString();  
    }  
  
}
```

O método `generateToken` cria um token com o sujeito, emissor, hora de emissão e uma reinvindicação personalizada "email" e o segundo método verifica o mesmo e extrai o email. Agora para que isso funcione, precisamos fornecer um segredo. O segredo é uma sequência (privada ao seu projeto/equipe/empresa) usado para assinar os seus tokens. Para adiciona-lo precisamos abrir o `application.properties` dentro da parta `resources` e adicionar a seguinte propriedade: `jwt_secret = SEU_SEGREDO_AQUI` 

Precisamos certificar-nos de escolher uma sequência aleatória e longa como segredo para assim garantir a segurança dos seus tokens. 

Agora criaremos um serviço de detalhes ao usuário. A `UserDetailsService` é usada para fornecer a implementação personalizada para buscar os detalhes do usuário que tenta se autenticar no aplicativo. Isto é feito no método `loadUserByUsername`. Se nenhum usuário for encontrado a exceção `UsernameNotFoundException` é lançada. Criaremos uma classe `MyUserDetailsService` que implementará a interface `UserDetailsService`.

```java
@Component  
public class MyUserDetailsService implements UserDetailsService {  
  
    @Autowired  
    private UserRepository userRepository;  
  
    @Override  
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {  
        Optional<User> userRes = userRepository.findByEmail(email);  
        if (userRes.isEmpty()) {  
            throw new UsernameNotFoundException("Couldn't find an User with email: " + email);  
        }  
  
        User user = userRes.get();  
        return new org.springframework.security.core.userdetails.User(  
                email,  
                user.getPassword(),  
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))  
        );  
    }  
}
```

Mais infos sobre como funciona o `UserDetailsService` e a autenticação geral do Spring Security -> https://medium.com/geekculture/spring-security-authentication-process-authentication-flow-behind-the-scenes-d56da63f04fa


Agora precisamos criar um JWTFilter. Ele será executado para cada solicitação, implementando a interface `OncePerRequestFilter` que verifica se um token Bearer está presente no cabeçalho Auth. Se um token estiver presente, o token será verificado e os dados de autenticação serão definidos para o usuário desta solicitação, definindo a propriedade de autenticação do `SecurityContext` usando o `SecurityContextHolder`. É aqui que o nosso JWT entra em ação e garante que sejamos autenticados e podemos acessar recursos protegidos que exigem que façamos login.

```java
@Component  
public class JWTFilter extends OncePerRequestFilter {  
  
    @Autowired  
    private MyUserDetailsService userDetailsService;  
  
    @Autowired  
    private JWTUtil jwtUtil;  
  
    @Override  
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {  
        String authHeader = request.getHeader("Authorization");  
        if (authHeader != null && !authHeader.isBlank() && authHeader.startsWith("Bearer ")) {  
            String jwt = authHeader.substring(7);  
            if (jwt.isBlank()) {  
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid JWT Token in Bearer Header");  
            } else {  
                try {  
                    String email = jwtUtil.validateTokenAndRetrieveSubject(jwt);  
                    UserDetails userDetails = userDetailsService.loadUserByUsername(email);  
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(email, userDetails.getPassword(), userDetails.getAuthorities());  
  
                    if (SecurityContextHolder.getContext().getAuthentication() == null) {  
                        SecurityContextHolder.getContext().setAuthentication(authToken);  
                    }  
                } catch (JWTVerificationException e) {  
                    response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid JWT Token");  
                }  
            }  
        }  
        filterChain.doFilter(request, response);  
    }  
  
}
```

Agora para juntarmos tudo isso e configurar a segurança do aplicativo criaremos a classe `SecurityConfig`

```java
@Configuration  
@EnableMethodSecurity  
public class SecurityConfig {  
  
    @Autowired  
    private JWTFilter filter;  
    @Autowired  
    private MyUserDetailsService uds;  
  
    @Bean  
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {  
        http.csrf().disable()  
                .httpBasic().disable()  
                .cors()  
                .and()  
                .authorizeHttpRequests((authz) -> authz  
                        .requestMatchers("/api/auth/**").permitAll()  
                        .requestMatchers("/api/user/**").hasRole("USER")  
                ).userDetailsService(uds)  
                .exceptionHandling()  
                .authenticationEntryPoint(  
                        ((request, response, authException) ->  
                                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized"))  
  
                )  
                .and()  
                .sessionManagement()  
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);  
  
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);  
  
        return http.build();  
    }  
  
    @Bean  
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }  
  
    @Bean  
    public AuthenticationManager authenticationManager(HttpSecurity http, PasswordEncoder passwordEncoder, UserDetailsService userDetailsService) throws Exception {  
        return http.getSharedObject(AuthenticationManagerBuilder.class)  
                .userDetailsService(userDetailsService)  
                .passwordEncoder(passwordEncoder)  
                .and()  
                .build();  
    }  
  
}
```

Nessa configuração temos algumas partes importantes a serem observadas, como:
- As solicitações de rota "auth" têm acesso a todos (Bastante óbvio já que precisamos ter acesso às rotas de login e registro)
- As solicitações de rota "user" só podem ser acessadas por usuários autenticados com a ROLE User, definida em `MyUserDetailsService`
- O servidor está configurado para rejeitar a solicitação como não autorizada quando o ponto de entrada for atingido. Se esse ponto for alcançado, significa que a solicitação atual requer autenticação e nenhum token JWT foi encontrado anexado ao cabeçalho de Autorização da solicitação atual.
- O JWTFilter é adicionado à cadeia de filtros para processar solicitações recebidas.
- Criamos um Bean para codificar a senha
- Expomos o Bean do gerenciador de autenticação que será usado para executar o processo de autenticação no `AuthController`


### Models

Criaremos um pacote `Models` e dentro dele uma classe `LoginCredencials`. Essa classe será usada para aceitar os dados de login da solicitação. Está classe possui duas propriedades simples - email e senha junto das anotações relacionados ao Lombok

Agora juntaremos tudo dentro em um `Controller`. Criaremos um pacote `Controller` com duas classes

 - `AuthController`  - Lida com o registro e o login das rotas de autenticação.

```java
@RestController  
@RequestMapping("/api/auth")  
public class AuthController {  
  
    @Autowired  
    private UserRepository userRepository;  
    @Autowired  
    private JWTUtil jwtUtil;  
    @Autowired  
    private AuthenticationManager authenticationManager;  
    @Autowired  
    private PasswordEncoder passwordEncoder;  
  
    @PostMapping("/register")  
    public Map<String, Object> registerHandler(@RequestBody User user) {  
        String encodedPass = passwordEncoder.encode(user.getPassword());  
  
        user.setPassword(encodedPass);  
  
        user = userRepository.save(user);  
  
        String token = jwtUtil.generateToken(user.getEmail());  
  
        return Collections.singletonMap("jwt-token", token);  
    }  
  
    @PostMapping("/login")  
    public Map<String, Object> loginHandler(@RequestBody LoginCredentials body) {  
        try {  
            UsernamePasswordAuthenticationToken authInputToken =  
                    new UsernamePasswordAuthenticationToken(body.getEmail(), body.getPassword());  
  
            authenticationManager.authenticate(authInputToken);  
  
            String token = jwtUtil.generateToken(body.getEmail());  
  
            return Collections.singletonMap("jwt-token", token);  
        } catch (AuthenticationException e) {  
            throw new RuntimeException("Invalid Login Credentials");  
        }  
    }  
  
}
```

O método `register` persiste a entidade e depois responde com um JWT, já o método `login` autentica as credenciais de login e responde com um JWT.


- `UserControler` - Lida com as rotas do usuário.

```java
@RestController  
@RequestMapping("/api/user")  
public class UserController {  
  
    @Autowired  
    private UserRepository userRepository;  
  
    @GetMapping("/info")  
    public User getUserDetails() {  
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();  
  
        return userRepository.findByEmail(email).get();  
    }  
  
}
```

Observamos que o email do usuário não é tomado como entrada e sim é extraído do `SecurityContext` como o email que foi definido no `JWTFilter`.


### Executando o projeto!

Para executar o projeto podemos utilizar a IDE da nossa preferência, estarei utilizando o IntelliJ IDEA

Projeto executado e rodando, hora de testarmos nossa implementação. Para realizar as requests estarei utilizando o Postman, porém, assim como a IDE vai da sua preferência.

#### Register

![[Captura de tela de 2023-02-26 17-03-38.png]]

Como podemos ver acabamos de gerar o nosso primeiro JWT com o Spring Security.

Agora também podemos testar nossa a rota protegida, copiaremos o token, pois precisaremos dele logo mais.

![[Captura de tela de 2023-02-26 17-13-15.png]]

Criamos uma nova request e realizamos a solicitação. O resultado como essperado é um status http 401, pois criamos essa rota protegida. Para acessa-la precisaremos passar o nosso token JWT.

Para passar o token precisamos ir à guia de Autorização e selecionar o token como **Bearer Token** 

![[Captura de tela de 2023-02-26 17-13-53.png]]

Agora quando enviamos a solicitação junto do **Token** o nosso resultado é:
![[Captura de tela de 2023-02-26 17-16-25.png]]

Login com credenciais inválidas
![[Captura de tela de 2023-02-26 17-40-24.png]]

Login com credenciais validas
![[Captura de tela de 2023-02-26 17-40-03.png]]