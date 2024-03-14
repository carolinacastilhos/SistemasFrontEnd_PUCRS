 <h1 align="center"> Fase 1 Projeto Disciplina Desenvolvimento de Sistemas Frontend </h1>

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

## Componentes

Atualmente, o projeto é composto por 7 componentes:

1. <strong>About:</strong> este componente é responsável pela página “Sobre” da aplicação,
   contendo uma breve explicação sobre ela. Ela pode ser acessada pelo link de
   navegação “Sobre” do cabeçalho.
2. <strong>CarDetail:</strong> componente que renderiza o conteúdo de detalhe dos carros que
   compõem a lista de carros da aplicação. É apresentado como um modal
   quando é selecionado um dos carros da lista na página “Carros” (CarsList).
3. <strong>CarForm:</strong> componente que renderiza a página responsável pela adição de
   carros na lista, além de edição e exclusão. A página contém os inputs de
   entrada de dados para adição do novo carro, assim como apresenta uma
   visualização da lista de carros que será alterada com a adição de novos carros,
   edição (aparecendo um modal para esta atualização) ou exclusão.
4. <strong>CarsList:</strong> componente responsável pela página que apresenta a lista de carros
   consumidas do arquivo “carsData”. Nesta página é possível excluir algum item
   da lista, bem com selecionar um dos itens para que abra um modal do detalhe
   do carro selecionado (modal de “CarDetail”).
5. <strong>Home:</strong> componente responsável por renderizar a página inicial da aplicação,
   que é chamada ao clicar também no link de navegação “Home” e na Logo do
   carro no cabeçalho.
6. <strong>Navbar:</strong> componente responsável por renderizar o cabeçalho de todas as
   páginas da aplicação. Este componente permite a navegação entre as páginas
   “Home”, “Sobre” (About), “Carros” (CarList) e Adicionar Carro (CarForm).
7. <strong>NotFound:</strong> componente responsável por renderizar a página que informa
   “Página não encontrada!” na tentativa de acessar um caminho não
   reconhecido pela aplicação.
