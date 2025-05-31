import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  useGetPaginatedPokemons,
  usePostPaginatedPokemons,
} from "src/services/mutations/pokemon.mutations";

import { usePokemonById } from "src/services/querys/pokemonById.query";
import type { RootState } from "src/store";
import { increment } from "src/store/reducers/counterSlice";
import { notifyToast } from "src/utils/toast.utils";

const usePokemons = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [count, setCount] = useState(1);
  const [dataPokelista, setdataPokelista] = useState<null | any>(null);
  const { data } = usePokemonById(count);
  const { mutate } = useGetPaginatedPokemons();
  const { mutate: _postPaginatedService } = usePostPaginatedPokemons();

  const handleGetPokeList = () => {
    setloading(true);
    mutate(
      { body: { limit: 150 } },
      {
        onSuccess(data, _variables, _context) {
          setdataPokelista(data);
          notifyToast("informacion obtenida mi buen", "success");
          setloading(false);
          console.log(data);
        },
        onError(error, _variables, _context) {
          notifyToast("informacion obtenida mi buen", "error");
          console.log(error);
        },
      }
    );
  };

  const handleClickButton = () => {
    setCount((count) => count + 1);
    notifyToast("es asi de facil", "success");
    notifyToast("es asi de facil", "warning");
    notifyToast("es asi de facil", "error");
    dispatch(increment());
  };

  return {
    //variables
    value,
    count,
    data,
    loading,
    dataPokelista,
    //functiones
    dispatch,
    notifyToast,
    handleClickButton,
    handleGetPokeList,
  };
};

export default usePokemons;
