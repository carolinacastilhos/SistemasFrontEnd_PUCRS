 <h1 align="center"> Fase 1 Projeto Disciplina Desenvolvimento de Sistemas Frontend </h1>

<h3 align="center">Curso Análise e Desenvolvimento de Sistemas: Full-Stack e Mobile </br>
Universidade Pontifícia Católica do Rio Grande do Sul (PUCRS) </br>
Aluna: Carolina Castilhos da Silva </h3>

### - Como executar o projeto

Para executar o projeto, deve-se entrar no Prompt de Comando dentro da pasta do
projeto (hotwheels) e executar a sequência de comandos abaixo:

1. npm install
2. npm install react-router-dom
3. npm start
   Desta forma, o projeto será executado e poderá ser visualizado no navegador.

### - Componentes

Atualmente, o projeto é composto por 7 componentes:

1. About: este componente é responsável pela página “Sobre” da aplicação,
   contendo uma breve explicação sobre ela. Ela pode ser acessada pelo link de
   navegação “Sobre” do cabeçalho.
2. CarDetail: componente que renderiza o conteúdo de detalhe dos carros que
   compõem a lista de carros da aplicação. É apresentado como um modal
   quando é selecionado um dos carros da lista na página “Carros” (CarsList).
3. CarForm: componente que renderiza a página responsável pela adição de
   carros na lista, além de edição e exclusão. A página contém os inputs de
   entrada de dados para adição do novo carro, assim como apresenta uma
   visualização da lista de carros que será alterada com a adição de novos carros,
   edição (aparecendo um modal para esta atualização) ou exclusão.
4. CarsList: componente responsável pela página que apresenta a lista de carros
   consumidas do arquivo “carsData”. Nesta página é possível excluir algum item
   da lista, bem com selecionar um dos itens para que abra um modal do detalhe
   do carro selecionado (modal de “CarDetail”).
5. Home: componente responsável por renderizar a página inicial da aplicação,
   que é chamada ao clicar também no link de navegação “Home” e na Logo do
   carro no cabeçalho.
6. Navbar: componente responsável por renderizar o cabeçalho de todas as
   páginas da aplicação. Este componente permite a navegação entre as páginas
   “Home”, “Sobre” (About), “Carros” (CarList) e Adicionar Carro (CarForm).
7. NotFound: componente responsável por renderizar a página que informa
   “Página não encontrada!” na tentativa de acessar um caminho não
   reconhecido pela aplicação.
