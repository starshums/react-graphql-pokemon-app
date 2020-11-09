import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_POKEMONS } from "../graphql/getPokemons";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
  const { data: { pokemons = {} } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: 17, offset: 1 },
  });

  return (
    <div className="grid grid-cols-3 gap-4 w-sm rounded overflow-hidden p-10">
      {pokemons.results &&
        pokemons.results.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
    </div>
  );
}
