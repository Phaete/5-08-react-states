import {RickAndMortyGalleryProps} from "./RickAndMortyGalleryProp.ts";
import RickAndMortyCard from "../RickAndMortyCard/RickAndMortyCard.tsx";


export default function RickAndMortyGallery(props: Readonly<RickAndMortyGalleryProps>) {
    return(
        <>
            {props.characterList.map((character) => <RickAndMortyCard character={character}/>)}
        </>
    )
}