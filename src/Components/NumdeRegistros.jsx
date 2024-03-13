import React from 'react';

const NumdeRegistros = ({ totalRegistros, personasTotales }) => {
  return (
    <div>
      <div>
        <p>Total registros: {totalRegistros} de {personasTotales}</p>
      </div>
    </div>
  );
}

export default NumdeRegistros;
