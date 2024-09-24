import './App.css'
import {useState} from "react";
import {response} from "./assets/components/RickAndMortyResponse.ts";
import {RickAndMortyCharacter} from "./assets/components/RickAndMortyCharacter.ts";
import RickAndMortyGallery from "./assets/components/RickAndMortyGallery/RickAndMortyGallery.tsx";

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

    const [filter, setfilter] = useState<string>("")

    const filteredList: RickAndMortyCharacter[] = response.filter(
        character => character.name.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <div>
        <h1>Rick And Morty Data</h1>
        <input type="text" id={"myInput"} placeholder={"Search a character..."} onChange={(e) => setfilter(e.target.value)}/>
        {filteredList.length > 0 ? <p><RickAndMortyGallery characterList={filteredList}/></p> :
            <p>No characters found</p>}
    </div>
  )
}

export default App
