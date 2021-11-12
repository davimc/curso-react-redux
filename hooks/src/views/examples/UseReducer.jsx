import React, { useEffect, useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseReducer = props => {
  const initialState = {
    user: null,
    cart: {},
    number: 0
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'numberAdd2':
        return { ...state, number: state.number + 2 }
      case 'login':
        return { ...state, user: { name: action.payload } }
      case 'numberMultiply7':
        return { ...state, number: state.number * 7 }
      case 'numberParseInt':
        return { ...state, number: parseInt(state.number) }
      case 'numberDivide25':
        return { ...state, number: state.number / 25 }
      case 'numberAddN':
        return { ...state, number: state.number + action.n }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [n, setN] = useState()

  useEffect(() => {
    dispatch({ type: 'numberParseInt' })
  }, [state.number])
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
          <button
            className="btn"
            onClick={() => dispatch({ type: 'login', payload: 'Maria' })}
          >
            login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberAdd2' })}
          >
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
            onClick={() => dispatch({ type: 'numberAddN', n: n })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
