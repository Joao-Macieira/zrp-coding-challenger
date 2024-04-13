# Projeto de Exemplo

Este é um projeto de exemplo que consiste em um backend NestJS dockerizado com um endpoint `/pokemons/:name` e um frontend Vite.

## Configuração

### Pré-requisitos

- Docker
- Node.js
- Yarn (ou npm)

### Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

2. Entre no diretório do projeto:

```bash
cd seu-projeto
```

#### Backend

3. Execute o seguinte comando para construir e iniciar o contêiner Docker para o backend:

```bash
docker-compose up -d --build
```

#### Frontend

4. Entre no diretório do frontend:

```bash
cd frontend
```

5. Instale as dependências do frontend:

```bash
yarn install
```

## Uso

### Backend

- O backend estará disponível em `http://localhost:3000`.
- O único endpoint disponível é `/pokemons/:name`, onde `:name` é um parâmetro que pode ser substituído pelo nome de um Pokémon.

Exemplo de uso:

```bash
curl http://localhost:3000/pokemons/bulbasaur
```

### Frontend

- O frontend estará disponível em `http://localhost:5173`.
- Você pode iniciar o servidor de desenvolvimento do frontend com o seguinte comando:

```bash
yarn dev
```

Após iniciar o servidor, você pode acessar o frontend em `http://localhost:5173` no seu navegador.

#### Todos os Projetos Juntos

Caso queira rodar todos os projetos juntos, na própria pasta do projeto temos um arquivo docker-compose, onde basta rodar o comando abaixo para a aplicação rodar:

```bash
docker-compose up -d --build
```

## Contribuição

Contribuições são bem-vindas! Para sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).