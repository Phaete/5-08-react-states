import {RickAndMortyCharacter} from "../RickAndMortyCharacter.ts";
import {useState} from "react";
import {response} from "../RickAndMortyResponse.ts";

type RickAndMortyComponentProps = {
    characterList: RickAndMortyCharacter[]
}

export default function RickAndMortyComponent(prop : RickAndMortyComponentProps) {
    console.log("Fresh list to component" + prop.characterList)
    const [searchString, setSearchString] = useState<string>("")

    return (
        <>
            <input type="text" id={"myInput"} onChange={(e) => setSearchString(e.target.value)}/>
            {console.log("This is the log " + prop.characterList)}
            {response.filter(
                    character => character.name.toLowerCase().includes(searchString.toLowerCase())
                ).map(char => {
                    <p>
                        {char.name}
                    </p>
                })
            }
        </>
    )
}