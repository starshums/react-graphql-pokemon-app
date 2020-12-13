import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { Routes } from "./Routes";

function App() {
  const client = new ApolloClient({
    uri: "https://mazipan-gql-pokeapi.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <nav className="flex items-center justify-between flex-wrap bg-red-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src="https://vgboxart.com/resources/render/13697_pokeball-prev.png"
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
          />
          <span className="font-semibold text-xl tracking-tight">
            <a href="/pokemons">Pokémon, Gotta Catch 'em All !</a>
          </span>
        </div>
      </nav>
      <div className="container">
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;