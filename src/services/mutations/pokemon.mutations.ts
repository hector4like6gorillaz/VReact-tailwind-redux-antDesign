import { useMutation } from "@tanstack/react-query";
import { getPokemons, postPokemons } from "../pokemon.service";

export const useGetPaginatedPokemons = () => {
  return useMutation({
    mutationFn: getPokemons,
  });
};

export const usePostPaginatedPokemons = () => {
  return useMutation({
    mutationFn: postPokemons,
  });
};
