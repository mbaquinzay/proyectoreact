
import React from 'react';
import serv from '../img/servicios.jpg';


const Servicios = () => {
    return (
      <div>
        {/* <h1>Servicios</h1> */}
        <img 
            src={serv}
            alt="Servicios" 
            style={{ width: '100%', height: 'auto' }} // Puedes ajustar el tamaño según sea necesario

        
        ></img>

      </div>
    );
  };
  
  export default Servicios;
  