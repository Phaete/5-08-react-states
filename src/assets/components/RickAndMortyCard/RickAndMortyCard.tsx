import {RickAndMortyCardProps} from "./RickAndMortyCardProp.ts";

export default function RickAndMortyCard (props: RickAndMortyCardProps) {

    return(
        <>
            <img src={props.character.image}/>
            <h3>{props.character.name}</h3>
            <p>{props.character.status}</p>
            <p>{props.character.species}</p>
            <p>{props.character.gender}</p>
        </>
    )
}