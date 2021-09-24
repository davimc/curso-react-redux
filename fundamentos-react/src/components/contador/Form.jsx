import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="InputPasso">Passo</label>
            <input
                id="InputPasso"
                value={props.passo}
                type="number"
                onChange={e=> props.setPasso(+e.target.value)} />
        </div>
    )
}