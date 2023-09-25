# Projeto ASP.NET Core 5 e React

Este é um projeto que combina ASP.NET Core 5 como backend e React como frontend para criar uma aplicação web. O projeto inclui uma API RESTful e demonstra o uso do Entity Framework Core 5 para interagir com um banco de dados.

## Tecnologias Utilizadas

- ASP.NET Core 5
- React
- Entity Framework Core 5
- JavaScript
- HTML/CSS
- RESTful API

## Configuração

Certifique-se de ter as seguintes ferramentas e tecnologias instaladas:

- [Visual Studio](https://visualstudio.microsoft.com/) (ou Visual Studio Code)
- [.NET Core 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)
- [Node.js](https://nodejs.org/) e npm (Node Package Manager)

## Executando o Projeto

1. Clone este repositório para o seu ambiente local:

   ```shell
   git clone https://github.com/matheusgarcia06/react-dotnetcore-efcore.git

# Executando o Projeto

1. Navegue para o diretório do projeto:

   ```shell
   cd seu-projeto
   dotnet restore

2. Execute o backend (ASP.NET Core) com o seguinte comando:
   ```shell
   dotnet run
   
3. O servidor estará em execução em http://localhost:5000. Navegue para o diretório do frontend (React):
    ```shell
   dotnet run

4. Instale as dependências do frontend (React)
    ```shell
   npm install
5. Inicie o servidor de desenvolvimento do frontend com o seguinte comando:
   ```shell
   npm start

# Funcionalidades

A aplicação possui as seguintes funcionalidades:

1. **Lista de Tarefas:**

   - Os usuários podem visualizar uma lista de tarefas existentes.
   - Cada tarefa exibe um título, descrição e prioridade.

2. **CRUD (Create, Read, Update, Delete):**

   - **Criar Tarefa:**
     - Os usuários podem criar uma nova tarefa especificando um título, descrição e prioridade.
     - As novas tarefas são adicionadas à lista de tarefas existente.

   - **Visualizar Tarefa:**
     - Os usuários podem visualizar detalhes de uma tarefa específica clicando nela na lista.
     - Isso inclui a exibição do título, descrição e prioridade da tarefa.

   - **Atualizar Tarefa:**
     - Os usuários podem editar as informações de uma tarefa existente.
     - Isso inclui a modificação do título, descrição e prioridade.

   - **Excluir Tarefa:**
     - Os usuários podem remover uma tarefa da lista.

3. **Prioridade:**

   - As tarefas podem ser marcadas com uma prioridade para indicar sua importância.
   - As opções de prioridade incluem "Alta", "Média" e "Baixa".

4. **Integração Backend e Frontend:**

   - A aplicação integra um backend ASP.NET Core com um frontend React.
   - O frontend se comunica com o backend por meio de uma API RESTful para realizar operações CRUD nas tarefas.

5. **Persistência de Dados:**

   - As tarefas criadas são persistentes e armazenadas no backend.
   - Isso permite que os dados das tarefas sejam mantidos entre as sessões.
  
   # Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para suas melhorias: `git checkout -b minha-melhoria`.
3. Faça commit das suas alterações: `git commit -m 'Adicione minha melhoria'`.
4. Faça push para a branch: `git push origin minha-melhoria`.
5. Abra um Pull Request.

Agradecemos antecipadamente por suas contribuições!

# Licença

Este projeto está licenciado sob a Licença MIT.

Feito com ❤️ por [Seu Nome] - [Link para o seu GitHub](https://github.com/seu-usuario)

Certifique-se de substituir `Matheus Garcia Nogueira` pelo seu nome ou nome de usuário e `https://www.linkedin.com/in/matheusgarcianogueira/` pelo link para o seu perfil no GitHub.






   
