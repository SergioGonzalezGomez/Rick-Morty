import React from 'react';
import './Buscador.css';

const Buscador = ({texto, setTexto}) => {
 
 const handleInputChange = ({target}) => {
     setTexto(target.value);
 };
 const handleSubmit = (e) => {
     e.preventDefault();

 };
 
 
    return (
    <div className="buscador">
        <form onSubmit={handleSubmit}>
            <input className="buscador-input" type="text" name ="buscar" placeholder="busca aquí..." value={texto} onChange={handleInputChange}
            />
        </form>
        
        </div>
  )
}

export default Buscador;