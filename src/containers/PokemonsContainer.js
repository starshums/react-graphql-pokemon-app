import React from "react";
import { useQuery } from '@apollo/client';

import { GET_POKEMONS } from "../graphql/getPokemons";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
  const { loading, error, data: { pokemons = {} } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: 14, offset: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="grid grid-cols-3 gap-4 w-sm rounded overflow-hidden p-10">
      {pokemons.results &&
        pokemons.results.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
    </div>
  );
}
