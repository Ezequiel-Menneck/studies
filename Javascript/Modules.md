## Oque é um modulo
- Modulo é apenas um arquivo. Um script é um modulo, simples.
- Modulos podem carregar outros modulos, usando as keyword export e import
	- Export: Faz as variaveis e funções serem acessiveis de fora do modulo atual
	- Import: Permite importar funcionalidades de outros modulos.
- Um modulo é carregado apenas na primeira vez que é impotado
- Se temos um módulo que é importado em muitos arquivos ele só será avaliado/carregado a primeira vez, nos outros arquivos  será carregado os valores do primeiro carregamento.
