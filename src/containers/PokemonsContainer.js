import React, { useState, useRef } from "react";
import { useQuery } from "@apollo/client";

import { GET_POKEMONS } from "../graphql/getPokemons";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
  const [limit, setLimit] = useState(14);
  const divRef = useRef(null);
  const { fetchMore, loading, error, data: { pokemons = {} } = {} } = useQuery(
    GET_POKEMONS,
    {
      variables: { limit, offset: 1 },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let loadMore = () => {
    const currentLength = pokemons.results.length - 1;
    fetchMore({
      variables: {
        limit,
      },
      updateQuery: (prev, { fetchMoreResult, ...rest }) => {
        setLimit(currentLength + fetchMoreResult.pokemons.results.length);
        if (!fetchMoreResult) return prev;
        return {
          ...fetchMoreResult,
          pokemons: {
            ...fetchMoreResult.pokemons,
            pokemons: [
              ...prev.pokemons.results,
              ...fetchMoreResult.pokemons.results,
            ],
          },
        };
      },
    }).then(() => {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-sm rounded overflow-hidden p-10">
      {pokemons.results &&
        pokemons.results.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}

      <br></br>
      <div ref={divRef} className="grid grid-cols-12 container self-center rounded">
        <button
          onClick={() => loadMore()}
          className="btn btn-cyan border-teal-500 bg-teal-500 text-white p-6 hover:bg-teal-600 focus:outline-none focus:shadow-outline"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}
