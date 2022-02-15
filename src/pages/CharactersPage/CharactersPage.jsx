import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from '../../components/Gallery/Gallery';
import Pagination from '../../components/Pagination/Pagination';
import Buscador from '../../components/Buscador/Buscador';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [texto, setTexto] = useState("");
   
    /*  const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [items, setItems] = useState([]); */

    const getCharacters = async (newPage= 1) => {
        const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPage);
        setCharacters(res.data.results); /* Necesitamos una variable de estado para pintar los personajes, si no no renderiza los datos */
    }
    useEffect(getCharacters, []) /* array vacio para que solo lo ejecute una vez */
    
    const charactersFilter = characters.filter((characters) => characters.name.toLowerCase().includes(texto.toLowerCase()));
    
    return (
        <div>
            <Buscador texto={texto} setTexto={setTexto} />
            <Pagination getData={getCharacters}/>
            <Gallery list={charactersFilter}/>
           
        </div>

    );

    /*   if (error) {
          return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <ul>
                  {items.map(item => (
                      <li key={item.id}>
                          {item.name} {item.id}
                      </li>
                  ))}
              </ul>
          );
      } */

}



export default CharactersPage;