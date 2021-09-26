import './Mega.css'
import React, { useState } from 'react'


export default props => {
    const gerarNumero = (min, max, array) => {
        let num = parseInt(Math.random() *(max-min))+min;

        return array.includes(num) ? gerarNumero(min,max,array) 
        : num;
        return array;
    }
    const gerarNumeros = (qtd) =>{
        let numeros = Array(qtd).fill(0)
        .reduce(nums => {
            const novoNumero = gerarNumero(1,61,nums);
            return [...nums, novoNumero]
        }, []);
        
        return numeros;
    }

    const [card, setCard] = useState(Array(props.qtd).fill(0));
    const showNumbers = _ => {
        let card = gerarNumeros(props.qtd);
        setCard(card)

    }
    return (
        <div className="MegaSena">
            <h2>Mega</h2>
            <div id="Numeros">
                {card.join(' ')}
            </div>
            <button onClick={showNumbers}>Gerar Numeros</button>
        </div>
    );
}