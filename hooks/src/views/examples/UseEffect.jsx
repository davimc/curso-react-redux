import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = props => {
  const [number, setNumber] = useState(1)
  const [fatorial, setFatorial] = useState(1)
  const [status, setStatus] = useState('Ímpar')

  function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
  }
  useEffect(() => {
    setFatorial(calcFatorial(number))
  }, [number])
  useEffect(() => {
    if (fatorial > 1000000) document.title = 'Eita!!!'
  }, [fatorial])
  useEffect(() => {
    setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
  }, [number])
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? 'Não existe' : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Tipo:</span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  )
}

export default UseEffect
