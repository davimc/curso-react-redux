import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    let [value, setValue] = useState(0);
    let [name, setName] = useState('Inicial...');
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="exercício #01" />
            <div className="center">
                <span className="text">{value}</span>
                <div>
                    <button className="btn" onClick={() => setValue(value++)}>+</button>
                    <button className="btn" onClick={() => setValue(value--)}>-</button>
                </div>
            </div>
            <SectionTitle title="exercício #02"/>
                <input type="text" className="input" value={name} onChange={event => setName(event.target.value)}/>
        </div>
    )
}

export default UseState
