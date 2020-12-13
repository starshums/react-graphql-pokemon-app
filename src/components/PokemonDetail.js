import { React, Fragment } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_POKEMON } from "../graphql/getPokemons";

export function PokemonDetail() {
  const { name: pokemonName } = useParams();

  const { loading, error, data: { pokemon = {} } = {} } = useQuery(
    GET_POKEMON, {
      variables: { name: pokemonName },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const backgroundStyle = {
    backgroundImage:
      "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png')",
  };

  function renderPokemon() {
    return (
      <Fragment key={pokemon.id}>
        <div className="bg-white shadow-lg overflow-hidden">
          <div
            className="flex px-4 py-5 sm:px-6 bg-red-500"
            style={backgroundStyle}
          >
            <img
              className="w-32 bg-white mr-4"
              src={ "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png" }
            />
            <h3 className="text-lg leading-6 text-white text-4xl mt-12 pr-3">
              #{pokemon.id} {pokemon.name.toUpperCase()}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-teal-300 bg-opacity-25">
                <dt className="text-sm font-medium text-black-500">Pokémon</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {pokemon.name.toUpperCase()}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-teal-500 bg-opacity-25">
                <dt className="text-sm font-medium text-black-500">
                  Abilities
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {pokemon.abilities &&
                    pokemon.abilities.map((ability) => {
                      return (
                        <li className="list-none"> {ability.ability.name} </li>
                      );
                    })}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-teal-300 bg-opacity-25">
                <dt className="text-sm font-medium text-black-500">Moves</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {pokemon.moves &&
                    pokemon.moves.map((move) => {
                      return <li className="list-none"> {move.move.name} </li>;
                    })}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-teal-500 bg-opacity-25">
                <dt className="text-sm font-medium text-black-500">Types</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {pokemon.types &&
                    pokemon.types.map((type) => {
                      return <li className="list-none"> {type.type.name} </li>;
                    })}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Fragment>
    );
  }

  return renderPokemon();
}
