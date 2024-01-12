# README - Jogo Navigator App

## Descrição do Projeto

Este projeto React Native é uma aplicação de navegação que utiliza o React Navigation para gerenciar diferentes telas relacionadas a operações de jogos, como cadastro, visualização, alteração e exclusão.

## Estrutura do Projeto

O projeto é organizado em diferentes telas, cada uma correspondendo a uma operação específica:

- **HomeScreen:** Tela inicial da aplicação.
- **CadastroScreen:** Tela para cadastrar um novo jogo.
- **VisualizarTodosScreen:** Tela para visualizar todos os jogos cadastrados.
- **AlterarJogoScreen:** Tela para alterar as informações de um jogo existente.
- **ExcluirJogoScreen:** Tela para excluir um jogo da lista.
- **VisualizarJogoEspecificoScreen:** Tela para visualizar detalhes específicos de um jogo.

## Dependências

O projeto utiliza as seguintes bibliotecas:

- `@react-navigation/native`: Navegação para aplicativos React Native.
- `@react-navigation/stack`: Implementação do tipo de navegação em pilha para React Navigation.

## Como Executar

1. Clone este repositório:

   ```bash
   git clone [https://github.com/Hargenx/controleJogos]
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd controleJogos
    ```

3. instale as dependências:
    ```bash
    npm install
    ```

4. Execute o aplicativo no emulador ou dispositivo:
    ```bash
    npm start
    ```
    ou
    ```bash
    npx react-native run-android # para Android
    ```
    ou
    ```bash
    npx react-native run-ios # para iOS
    ```


## Personalização
Caso necessário, personalize as opções de navegação, títulos e outras configurações conforme sua aplicação.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

## Licença

Este projeto está sob a [Licença MIT](LICENSE).