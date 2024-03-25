 <h1 align="center"> Fase 2 - Projeto Disciplina Desenvolvimento de Sistemas Frontend </h1>

<h3 align="center">Curso Análise e Desenvolvimento de Sistemas: Full-Stack e Mobile </br>
Universidade Pontifícia Católica do Rio Grande do Sul (PUCRS) </br>
Aluna: Carolina Castilhos da Silva </h3>

## Como executar o projeto

Para executar esse projeto, deve-se seguir os seguintes passos:

1. Clone o repositório: Abra o terminal (ou Prompt de Comando no Windows) e navegue até o diretório onde deseja clonar o repositório. Execute o seguinte comando para clonar o repositório para o seu computador: git clone https://github.com/carolinacastilhos/SistemasFrontend_PUCRS
2. Navegue para o diretório do projeto: Use o comando cd para entrar no diretório do projeto recém-clonado.
3. Instale as dependências do projeto: Use o comando npm install para instalar todas as dependências listadas no arquivo package.json do projeto.
4. Instale o pacote react-router-dom: Use o comando npm install react-router-dom para instalar o pacote react-router-dom.
5. Execute o projeto: Após instalar as dependências, você pode iniciar o projeto executando o comando npm start, que iniciará o servidor de desenvolvimento e abrirá automaticamente o projeto no navegador padrão.

Obs.: A API fornecida pela disciplina (hotwheels-api) deve estar em execução simultânea em outro terminal, utilizando o comando npm start.

## Componentes

O projeto é composto por 5 páginas, 4 componentes e 1 hook personalizado:

1. <b>Páginas</b>
   • About: Esta página apresenta informações sobre a aplicação na seção "Sobre". Ela contém uma breve explicação sobre o conceito de "CRUD" (Create, Read, Update, Delete). Você pode acessá-la através do link de navegação "Sobre" no cabeçalho da página.
   • CarForm: Responsável pela adição de carros à lista, esta página utiliza o componente "CarFormItem" para fornecer campos de inserção de dados.
   • CarsList: Nesta página, encontra-se a lista de carros, que é exibida utilizando o componente "CarsListItem".
   • Home: Página inicial da aplicação, acessada ao clicar no link "Home" no cabeçalho da página ou na logo do carro. A renderização desta página está sendo testada utilizando a ferramenta Jest, no arquivo Home.test.js.
   • NotFound: Página que informa “Página não encontrada!” na tentativa de acessar um caminho não reconhecido pela aplicação.

2. <b>Componentes</b>
   • CarDetail: componente que renderiza o conteúdo de detalhe dos carros que compõem a lista de carros da aplicação. É apresentado como um modal quando é selecionado um dos carros da lista na página “Carros” (CarsList).  
   • CarFormItem: componente que renderiza os inputs de entrada de dados para adição de um novo carro à lista de carros. Diversos testes foram criados no arquivo carFormItem.spec.cy.js para garantir o correto funcionamento do componente.
   • CarsListItem: componente responsável pela renderização da lista de carros consumidas da API hotwheels-api. É possível excluir itens da lista, bem com selecionar um dos itens para que abra um modal do detalhe do carro selecionado (modal de “CarDetail”). Testes como “deve abrir o modal CarDetail quando um carro é clicado” foram criados no arquivo carsListItem.spec.cy.js para garantir o funcionamento do componente.
   • Navbar: componente responsável por renderizar o cabeçalho de todas as páginas da aplicação. Este componente permite a navegação entre as páginas “Home”, “Sobre” (About), “Carros” (CarList) e Adicionar Carro (CarForm).

3. <b>Hook Personalizado “useApi” </b>
   Função personalizada que encapsula chamadas da API “hotwheels-api” usando a biblioteca Axios para interagir com um código que fornece dados sobre carros.
   • getAllCars: Esta função realiza uma chamada assíncrona para o endpoint “/cars” da API usando o método HTTP GET. Ela espera receber uma lista de carros como resposta e retorna esses dados. Se ocorrer algum erro durante a chamada, ele é capturado e uma exceção é lançada com uma mensagem de erro.
   • addCar: Esta função recebe um objeto car como parâmetro e realiza uma chamada assíncrona para o endpoint “/cars”, utilizando o método HTTP POST. Ela envia os dados do novo carro e espera receber o novo carro criado como resposta. Se ocorrer algum erro durante a chamada, ele é capturado e uma exceção é lançada com uma mensagem de erro.
   • deleteCar: Esta função recebe o id de um carro como parâmetro e realiza uma chamada assíncrona para o endpoint “/cars/:id”, utilizando o método HTTP DELETE. Ela envia o ID do carro que deve ser excluído e espera que a exclusão seja realizada com sucesso. Se ocorrer algum erro durante a chamada, ele é capturado e uma exceção é lançada com uma mensagem de erro.
   • Obs.: A função de atualização ou edição de um item na lista de carros não foi implementada devido à ausência dessa funcionalidade na API.
