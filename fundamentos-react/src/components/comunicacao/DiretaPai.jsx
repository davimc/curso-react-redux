import React from 'react'
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <div>Pai</div>
            <DiretaFilho nome="Junior" idade="17" nerd={true} />
        </div>
    )
}