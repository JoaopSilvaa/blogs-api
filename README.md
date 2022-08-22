# BLOGS API

# O que é o BLOGS API

Projeto que contém uma aplicação `Node.js`, que utiliza do pacote `Sequelize` para fazer um `CRUD` de posts. Construindo uma API e um banco de dados para produção de conteúdo para um blog.

## Técnologias usadas

Back-end:
> Desenvolvido usando: Node.JS, JavaScript, Express, CRUD, Sequelize, JWT


## Você pode rodar o projeto com ou sem docker

## Com Docker

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queira fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado blogs_api e outro chamado blogs_api_db;
  - A partir daqui você pode rodar o container blogs_api via CLI ou abri-lo no VS Code;

  > Use o comando `docker exec -it blogs_api bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

## Executando a aplicação
* Para rodar a aplicação é necessário rodar o comando abaixo e acessar as rotas disponíveis em um app como <a href='https://www.postman.com/downloads/'>Postman</a> ou no seu navegador com o `localhost:3000`:

    ```
    npm start
    ```
    > Para iniciar o Banco de dados e migrar as informações utilize `npm run prestart`


## Endpoints disponíveis:
* /login - POST
    > Endpoint disponível para fazer login de uma pessoa usuária:
    - O endpoint deve receber a seguinte estrutura:
    ```json
        {
            "email": "lewishamilton@gmail.com",
            "password": "123456"
        }
    ```

* /user - POST
    > Endpoint disponível para cadastrar uma pessoa usuária:
    ```json
        {
            "displayName": "Brett Wiltshire",
            "email": "brett@email.com",
            "password": "123456",
            "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
        }
    ```

* /users - GET
    > Endpoint disponível para listar pessoas usuárias:
    ```json
        [
            {
                "id": 1,
                "displayName": "Lewis Hamilton",
                "email": "lewishamilton@gmail.com",
                "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
            },

            /* ... */
        ]
    ```

* /users/:id - GET
    > Endpoint disponível para listar uma pessoa usuária por seu id:
    ```json
        {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        }
    ```

* /categories - POST
    > Endpoint disponível para cadastrar categorias:
    - O endpoint deve receber a seguinte estrutura:
    ```json
      {
        "name": "Typescript"
      }
    ```

* /categories - POST
    > Endpoint disponível para cadastrar categorias:
    ```json
        [
            {
                "id": 1,
                "name": "Inovação"
            },
            {
                "id": 2,
                "name": "Escola"
            },

            /* ... */
        ]
    ```

* /post - POST
    > Endpoint disponível para um novo blog post e vinculá-lo as categorias:
    - O endpoint deve receber a seguinte estrutura:
    ```json
        {
            "title": "Latest updates, August 1st",
            "content": "The whole text for the blog post goes here in this key",
            "categoryIds": [1, 2]
        }
    ```

* /post - GET
    > Endpoint disponível para listar blogs posts:
    ```json 
        [
            {
                "id": 1,
                "title": "Post do Ano",
                "content": "Melhor post do ano",
                "userId": 1,
                "published": "2011-08-01T19:58:00.000Z",
                "updated": "2011-08-01T19:58:51.000Z",
                "user": {
                "id": 1,
                "displayName": "Lewis Hamilton",
                "email": "lewishamilton@gmail.com",
                "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
                },
                "categories": [
                {
                    "id": 1,
                    "name": "Inovação"
                }
                ]
            },
            
            /* ... */
        ]   
    ```
* /post/:id - GET
    > Endpoint disponível para listar um blog post por seu id:
    ```json
        {
            "id": 1,
            "title": "Post do Ano",
            "content": "Melhor post do ano",
            "userId": 1,
            "published": "2011-08-01T19:58:00.000Z",
            "updated": "2011-08-01T19:58:51.000Z",
            "user": {
                "id": 1,
                "displayName": "Lewis Hamilton",
                "email": "lewishamilton@gmail.com",
                "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
            },
            "categories": [
                {
                    "id": 1,
                    "name": "Inovação"
                }
            ]
        }
    ```

* /post/:id - DELETE
    > Endpoint disponível para deletar um blog post por seu id;

* /post/search?q=:searchTerm - GET
    > Endpoint disponível para procurar blog posts que contenham em seu título ou conteúdo o termo passado na URL
    - Ex.:
    ```json
        // GET /post/search?q=Vamos que vamos

        [
            {
                "id": 2,
                "title": "Vamos que vamos",
                "content": "Foguete não tem ré",
                "userId": 1,
                "published": "2011-08-01T19:58:00.000Z",
                "updated": "2011-08-01T19:58:51.000Z",
                "user": {
                "id": 1,
                "displayName": "Lewis Hamilton",
                "email": "lewishamilton@gmail.com",
                "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
                },
                "categories": [
                {
                    "id": 2,
                    "name": "Escola"
                }
                ]
            }
        ]
    ```

<br><br>
Este projeto foi desenvolvido por [João Antônio](https://www.linkedin.com/in/joaoantoniosilvaa/) durante o curso de Desenvolvimento de Software na [Trybe](https://www.betrybe.com/) 