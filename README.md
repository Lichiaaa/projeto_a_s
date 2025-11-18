Instruções para instalação
- Tenha o node.js instalado (https://nodejs.org/en/download)
- com o arquivo do código baixado, para preparar o ambiente, certifique-se de que executou esses comandos em seu terminal:

	npm init -y;
	npm install typescript ts-node --save-dev
	npx tsc --init
	npm install @types/node --save-dev
	npm install --save-dev @types/prompt-sync
	npm install prompt-sync

- comando para compilar e executar o arquivo npm start (Isso porque no package.json adicione em "scripts" para "start": "npx ts-node --esm projeto_t1_arquitetura_de_software.ts")

Sobre o programa

Para o projeto foi escolhido o padrão de projeto Abstract Factory, nele se criam interfaces abstratas que contem as características principais/essenciais de um objeto real, após isso o processo fica mais especifico criando, com a implementação das interfaces, produtos mais concretos (que serão classes), para a fabrica a mesma coisa, primeiro uma fabrica abstrata e a fábrica concreta será uma função onde se agruparão os produtos concretos, tudo isso sem criar um "new objeto", feito com métodos, em contra ponto o código pode ficar muito extenso, já que toda vez é necessário adicionar todos os dados e tipos de produtos concretos novos. Sintetizando, este padrão fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
Como temática, usamos como inspiração os jogos de chá, por terem vários itens que juntos podem ser vendidos em conjuntos, apesar disso a proposta do programa é apenas de servir como um catalogo para visualização de jogos fabricados pela fabrica.

Explicações sobre partes do código

O programa que visa servir como catalogo, tem um menu de opções para escolha do usuário, para isso foram necessários esses comandos:

	npm install @types/node --save-dev
	npm install --save-dev @types/prompt-sync
	npm install prompt-sync

Para ser possível importar prompt-sync para então conseguir a entrada de dados pelo usuário, ou seja, para que ele escolha entre as opções de 0 a 3.
Na parte da estrutura está especificado cada parte como "// Interfaces abstratas", "// Produtos concretos", "// Fabrica Concreta", "// Demonstração".
	"// Interfaces abstratas" - Nessa parte será encontrada todas as interfaces para definir as estruturas dos produtos, inclusive a interface de jogos de chá para com métodos para criar cada item do conjunto.
	"// Produtos concretos" - Nessa parte estão as especificação das caracteristicas dos produtos, ou seja, dando forma aos produtos concretos com o implementos da interface correspondente ao item.
	"// Fabrica Concreta" - Função para montar o jogo de chá, unindo os itens de estilos correspondentes.
	"// Demonstração" - O que aparece para o usuário, visualização do menu, escolha das opções, execução da função e encerramento.
