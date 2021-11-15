import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { login, addNumber2 } from '../../store/actions'

const UseReducer = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [n, setN] = useState()
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => login(dispatch, 'João')}>
            login
          </button>
          <button className="btn" onClick={() => addNumber2(dispatch)}>
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberMultiply7' })}
          >
            x7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberDivide25' })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberParseInt' })}
          >
            Int
          </button>
        </div>
        <div>
          <input
            type="number"
            value={n}
            onChange={event => setN(+event.target.value)}
            className="input"
          />
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberAddN', payload: n })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
