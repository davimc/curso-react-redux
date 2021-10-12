import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const count = useRef(0);
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(() => {
        count.current++
        myInput2.current.focus();
    }, [text1])
    useEffect(() => {
        count.current++
        myInput1.current.focus();
    }, [text2])


    function merge(s1, s2) {
        return [...s1].map((e,i) => `${e}${s2[i] || ""}`)
        .join("");
    }


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">valor:</span>
                    <span className="text">{merge(text1, text2)} [</span>
                    <span className="text red"> {count.current} </span>
                    <span className="text">]</span>
                </div>
                <input className="input" type="text"
                    ref={myInput1}
                    value={text1} onChange={event => setText1(event.target.value)} />
            </div>
            <div className="center">
                <SectionTitle title="Exercício #02" />
                <input type="text" className="input"
                    ref={myInput2}
                    value={text2} onChange={event => setText2(event.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
