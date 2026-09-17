import React, { useState } from 'react';
import fondo from './assets/imagen.png';

function Tarjeta() {
  const nombre = "Samuel Frias Contreras";
  const profesion = "Ingeniero en comunicaciones y electronica";
  const mensaje = "¡Ingeniero apasionado por la innovación tecnológica, el desarrollo de sistemas de hardware/software e IoT. Enfocado en resolver problemas mediante código y diseño electrónico eficiente.!";

 
  const [interesado, setInteresado] = useState(false);

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      width: '500px', 
      margin: 'auto', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column',
      gap: '10px',
      backgroundColor:"rgb(33, 166, 207, 0.62)"
    }}>
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
      <img src={fondo} alt="Fondo de pantalla" width="100%" />

      {/* Botón con estado condicional */}
      {!interesado ? (
        <button 
          onClick={() => setInteresado(true)}
          style={{ padding: '8px 16px', cursor: 'pointer' , backgroundColor:"rgb(6, 6, 102)",color:"white" }}
        >
          Contactar / Me interesa trabajar contigo
        </button>
      ) : (
        <p style={{ color: 'green', fontWeight: 'bold', margin: '10px 0' }}>
          ¡Gracias por tu interés! pronto nos pondremos en contacto.
        </p>
      )}
    </div>
  );
}

export default Tarjeta;