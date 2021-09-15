import React from 'react'

export default props => {
    const { min, max } = props
    const valor = parseInt(Math.random() * (max - min) + min)
    return (
        <div>


            <h2>Valor Aleatorio:</h2>
            <p>max: {max}</p>
            <p>min: {min}</p>
            <p>resultado: {valor}</p>
        </div>
    )
}