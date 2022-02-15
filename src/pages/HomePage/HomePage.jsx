import React from "react";
import './HomePage.css';

import Profile from "../../components/Profile/Profile";

const HomePage = () => {
    return (
        <div className="home">

            <h1 className="home-h1">Bienvenidos a mi página de Rick & Morty</h1>
            
            
                <Profile/>
             
        <p className="home-p">Podrás buscar personajes y localizaciones</p>
        <p className="home-p">Si clickas en el botón elegir aparecerá el personaje en la Home</p>
        </div>
    );
}
export default HomePage;