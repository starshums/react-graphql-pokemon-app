import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

export function Pokemon({ pokemon }) {
  const history = useHistory();

  function handleOnClick(pokemon) {
    history.push(`/pokemon/${pokemon}`);
  }

  return (
    <Fragment>
      <div className="flex h-32 rounded overflow-hidden shadow-lg bg-gray-100">
        <img
          className="w-32 bg-white mr-4"
          src={pokemon.image}
          alt={pokemon.name}
        />
        <div className="">
          <div className="font-bold text-xl mb-2">
            {pokemon.name.toUpperCase()}
          </div>
          <p className="text-gray-700 text-base"> {pokemon.name} </p>
          <a
            onClick={() => handleOnClick(pokemon.name)}
            className="border border-teal-500 bg-teal-500 text-white rounded-md cursor-pointer mt-5 pl-3 pr-3 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
          >
            Details.
          </a>
        </div>
      </div>
    </Fragment>
  );
}
