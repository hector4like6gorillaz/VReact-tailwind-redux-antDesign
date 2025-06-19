import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import usePokemons from './hooks/usePokemons'
import { capitalFirstLetter } from './utils/words-utilities'

function App() {
  const {
    value,
    count,
    data,
    dataPokelista,
    handleClickButton,
    handleGetPokeList,
  } = usePokemons()

  return (
    <div className="flex flex-col items-center p-[2rem]  bg-primary-300  tablet:bg-amber-200 desktop:bg-warning-green ultrawide:bg-warning-orange">
      <div className="w-[50%] border-2  border-amber-300 flex gap-2 items-center justify-between px-[2rem]">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-[4rem] h-[4rem]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-[4rem] h-[4rem]" alt="React logo" />
        </a>

        {data?.sprites.animated !== null && (
          <a href="https://pokeapi.co/" target="_blank">
            {data?.sprites.front_default && (
              <img
                src={data?.sprites.front_default}
                className="w-[10rem] h-[10rem] "
                alt="React logo"
              />
            )}
          </a>
        )}
      </div>
      <h1 className="text-3xl mt-2">
        Vite + React, {capitalFirstLetter(data?.name ?? '')}{' '}
      </h1>
      <div className="flex p-7 gap-2 items-center justify-center">
        <button onClick={handleClickButton} style={{ all: 'revert' }}>
          count is {count},{value}
        </button>
        <button onClick={handleGetPokeList} style={{ all: 'revert' }}>
          obtener pokelista kanto
        </button>
      </div>
      {dataPokelista !== null && (
        <div className="">
          {dataPokelista.results.map(
            (item: { name: string }, index: number) => {
              return (
                <div key={index}>
                  <p>{capitalFirstLetter(item.name)} </p>
                </div>
              )
            }
          )}
        </div>
      )}
      <p className="read-the-docs">
        Click on the Vite, React and pokemon logos to learn more
      </p>
    </div>
  )
}

export default App
