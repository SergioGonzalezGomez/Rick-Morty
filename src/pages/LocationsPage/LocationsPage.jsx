import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import InfoLocation from '../../components/InfoLocation/InfoLocation';
import Pagination from '../../components/Pagination/Pagination';
import Buscador from '../../components/Buscador/Buscador';

const LocationsPage = () => {
    const [locations, setLocations] = useState([]);
    const [texto, setTexto] = useState("");


    const getLocations = async (newPage = 1) => {
        const res = await axios("https://rickandmortyapi.com/api/location?page=" + newPage);
        setLocations(res.data.results);/* Necesitamos una variable de estado para pintar los personajes, si no no renderiza los datos */
    }

    useEffect (getLocations, [])  /* array vacio para que solo lo ejecute una vez */
    
    const locationsFilter = locations.filter((locations) => locations.name.toLowerCase().includes(texto.toLowerCase()));
    
    return (
        <div>
            <Buscador texto={texto} setTexto={setTexto} />
            <Pagination getData={getLocations}/>
            <InfoLocation list={locationsFilter}/>
        </div>

    );
}

export default LocationsPage;