import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharactersDetailPage.css";

export default function CharactersDetailPage() {
    
    const {idCharacter} = useParams();
    const [character, setCharacter] = useState({});
    

    useEffect(() => {
        const getCharacter = async () => {
            const {data} = await axios("https://rickandmortyapi.com/api/character/" + idCharacter);
            setCharacter(data);
        }
        getCharacter();
    }, [])


    return <div className="cdp-figure">
        <h1 className="cdp-h1">{character.name}</h1>
        <img className="cdp-img"src={character.image} alt={character.name} />
        <p className="cdp-p">Species: {character.species}</p>
        <p className="cdp-p">Gender: {character.gender}</p>
        {idCharacter}
        </div>
}