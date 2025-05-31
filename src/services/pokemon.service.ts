import type { IPokeInfo } from "src/interfaces/pokemon.interface";
import { SERVICE } from "./config";

export const getPokemonById = async (id?: number): Promise<IPokeInfo> => {
  const { data } = await SERVICE().get(`/pokemon/${id ?? 150}`);
  return data;
};

export const getPokemons = async ({
  body,
}: {
  body: { limit: number };
}): Promise<IPokeInfo[]> => {
  const { data } = await SERVICE().get(`/pokemon?limit=${body.limit}&offset=0`);
  return data;
};
export const postPokemons = async ({
  body,
}: {
  body: { limit: number };
}): Promise<IPokeInfo[]> => {
  //este ejemplo solo es para ver como se utiliza porque en verdad este ep no funciona asi
  const { data } = await SERVICE().post(
    `/pokemon?limit=${body.limit}&offset=0`,
    body
  );
  return data;
};
