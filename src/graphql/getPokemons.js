import React from "react";
import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        name
        url
        image
      }
    }
  }
`;
