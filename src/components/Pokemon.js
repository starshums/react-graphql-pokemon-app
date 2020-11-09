import React, { Fragment } from "react";

export function Pokemon({ pokemon }) {
  return (
    <Fragment>
      <div className="flex h-32 rounded overflow-hidden shadow-lg bg-gray-100">
        <img className="w-32 bg-white mr-4" src={pokemon.image} alt={pokemon.name} />
        <div className="">
          <div className="font-bold text-xl mb-2"> {pokemon.name.toUpperCase()} </div>
          <p className="text-gray-700 text-base"> {pokemon.name} </p>
        </div>
      </div>
    </Fragment>
  );
}
