# :clipboard: React + Docker + GraphQL Pokémon Application!
This is a react application that shows a list of Pokémon, made by consuming a GraphQL Pokémon API

# :round_pushpin: Pokémon GraphQL API Used :
The GraphQL API used is a GraphQL implementation of pokeapi.co, more information can be found here :

[GraphQL Playground](https://mazipan-gql-pokeapi.herokuapp.com/graphql)

[Pokémon GraphQL Repository](https://github.com/mazipan/graphql-pokeapi)

[Pokémon API](https://pokeapi.co/)

# :globe_with_meridians: Demo
This application is hosted on Heroku :
[Live Demo](https://shums-react-graphql-pokemon.herokuapp.com/pokemons)

# :framed_picture: Screenshots
## /pokemons
![Pokémons](https://i.imgur.com/Sia3pc7.png)
## /pokemon/blastoise
![Detail](https://i.imgur.com/3mDgooC.png)

# :repeat: Developement
In the root directory run this command :

``` docker-compose up --build ```

# :repeat_one: Production
In the root directory as well, run the following :

``` docker-compose -f docker-compose.prod.yml  up --build ```

## :open_book: Todo/Future features?!
- [x] Pokémons List Page
- [x] Pokémon Details Page
- [x] Load More/Pagination
- [ ] Search Functionality

# :computer: Technologies Used
* React, GraphQL, Apollo Client, Tailwind CSS
* Docker, Docker Compose, Nginx
* Git, Gitflow Workflow
* Trello, Heroku

## :memo: License
[MIT](https://opensource.org/licenses/MIT)
