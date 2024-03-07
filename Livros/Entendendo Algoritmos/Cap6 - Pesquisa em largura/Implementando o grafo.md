Um garfo consiste de diversos vértices.
Cada vértice é conectado aos vértices vizinhos. Como expressamos uma relação do tipo "eu -> bob"? Felizmente temos a hash table que faz isso.
![[Pasted image 20240205190950.png]]
HashTable mapeia uma chave e um valor. Nesse caso desejamos mapear um vértice a todos os vizinhos
![[Pasted image 20240205191140.png]]
Em java ficaria algo como:
```Java
Map<String, List<String>> mapeado = new Hashtable<>();  
mapeado.put("Eu", Arrays.asList("Alice", "Bob", "Claire"));
```

Um grafo é apenas um monte de vértices e arestas, portando isso é tudo que precisamos p ter um grafo em Java.
Com um gravo maior?
![[Pasted image 20240205191749.png]]
Existe diferença se adicionarmos a galera em ordem diferente? Não, já que mapeamos chave valor.
Vértices sem arestas apontando para outros vértices são chamados dígrafo, onde a relação acontece apenas em um sentido.
![[Pasted image 20240205192232.png]]

### Implementando o algoritmo
![[Pasted image 20240205192253.png]]

![[Pasted image 20240205193416.png]]
Implementação de uma pesquisa de largura em java com grafos.
```java
private static Map<String, List<String>> graph = new HashMap<>();  
public static boolean search(String name) {  
    Queue<String> searchQueue = new ArrayDeque<>(graph.get(name));  
  
    List<String> searched = new ArrayList<>();  
  
    while (!searchQueue.isEmpty()) {  
        String person = searchQueue.poll();  
  
        if (!searched.contains(person)) {  
            if (personIsSeller(person)) {  
                System.out.println(person + " is a seller");  
                return true;  
            } else {  
                searchQueue.addAll(graph.get(person));  
                searched.add(person);  
            }  
        }  
    }  
    return false;  
}  
  
private static boolean personIsSeller(String name) {  
    return name.endsWith("m");  
}  
  
public static void main(String[] args) {  
    graph.put("Eu", Arrays.asList("Alice", "Bob", "Claire"));  
    graph.put("Bob", Arrays.asList("Anuj", "Peggy"));  
    graph.put("Alice", List.of("Peggy"));  
    graph.put("Claire", Arrays.asList("Thom", "Jonny"));  
    graph.put("Anuj", List.of());  
    graph.put("Peggy", List.of());  
    graph.put("Thom", List.of());  
    graph.put("Jonny", List.of());  
  
    search("Eu");  
}
```
### Tempo de execução
Se procurarmos em toda nossa rede, cada aresta (aresta é a seta ou conexão entre um vértice e outro) será analisada, logo o tempo de execução é no minimo, O(numero de arestas)
Além disso também será mantida a lista de pessoas verificadas, adicionar alguém lá leve um tempo constante de O(1). Fazer isso levara um tempo de execução de O(número de elementos a verificar). No total a pesquisa em largura tem tempo de execução de O(numero de vertices + numero de arestas), frequentemente escrito como O(V + A) (V para número de vértices e A para arestas).