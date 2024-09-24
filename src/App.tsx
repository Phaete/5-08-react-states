import './App.css'
import {useState} from "react";
import {response} from "./assets/components/RickAndMortyResponse.ts";
import RickAndMortyComponent from "./assets/components/RickAndMortyComponent/RickAndMortyComponent.tsx";
import {RickAndMortyCharacter} from "./assets/components/RickAndMortyCharacter.ts";

function App() {
/*
    const [ count, setCount ] = useState<number>(0)

    function increaseCount() {
        setCount(count+1) // setCount only works at the end of the function, meaning that the console.log call lags behind by 1
        console.log(count)
    }
  return (
    <>
        <h1>{count}</h1>
        {count % 2 === 0 ? <h2>Even</h2> : <h2>Odd</h2>} // ternary operator - if-else
        {count % 2 === 0 && <h2>Even</h2>} // && operator - if and only if
        <button onClick={increaseCount}>Click me!</button>
    </>
  )
  */

    const [characterList, setCharacterList] = useState<RickAndMortyCharacter[]>(response)
    console.log("State: " + characterList)

  return (
    <div>
        <h1>Rick And Morty Data</h1>
        <RickAndMortyComponent characterList={characterList}/>

    </div>
  )
}

export default App
