import React from 'react'
import {useParams} from 'react-router-dom'

function Param() {
    const {id} = useParams();
  return (
    <div className="Param">
      <h1>Componente Param</h1> 
      <h2>Valor: {id}!</h2>
    </div>
  );
}

export default Param;
