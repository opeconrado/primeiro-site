# Cadastro de Tarefas com React

Este projeto consiste em uma aplicação simples de cadastro de tarefas desenvolvida em React. A aplicação permite que o usuário adicione tarefas, escolha uma cor de fundo para a página e tenha seu nome armazenado para personalização da experiência.

## Funcionalidades Implementadas

1. **Solicitação do Nome do Usuário**:
   - Ao entrar na página, um alerta solicita o nome do usuário.
   - O nome é armazenado no `localStorage` para persistência entre sessões.

2. **Exibição Personalizada**:
   - O nome do usuário é exibido na tela junto com a frase ", sua lista de tarefas".

3. **Cadastro de Tarefas**:
   - O usuário pode adicionar novas tarefas através de um formulário.
   - As tarefas são armazenadas no `localStorage` para persistência.

4. **Seleção de Cor de Fundo**:
   - O usuário pode escolher entre várias cores suaves para o fundo da página.
   - As cores disponíveis são:
     - Ciano Claro (`#e0f7fa`)
     - Lilás Claro (`#f3e5f5`)
     - Amarelo Claro (`#fff8e1`)
     - Verde Claro (`#e8f5e9`)
   - A cor selecionada altera o fundo da página imediatamente.

5. **Persistência de Dados**:
   - O nome do usuário e a lista de tarefas são armazenados no `localStorage`, garantindo que os dados não sejam perdidos ao recarregar a página.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Hooks**: `useState` e `useEffect` para gerenciamento de estado e efeitos colaterais.
- **localStorage**: Para armazenamento persistente de dados no navegador.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```