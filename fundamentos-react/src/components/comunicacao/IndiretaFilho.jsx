import React from 'react'

export default props => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.click('João',53,true)}>Fornecer informações</button>
        </div>
    )
}