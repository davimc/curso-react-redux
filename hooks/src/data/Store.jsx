import React, { useState } from 'react'

const initialState = {
  text: 'Context API com Hooks',
  number: 1000
}
export const AppContext = React.createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)
  function updateState(key, value) {
    setState({ ...state, [key]: value })
  }
  return (
    <AppContext.Provider
      value={{
        text: state.text,
        number: state.number,
        setNumber: n => updateState('number', n),
        setText: t => updateState('text', t)
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default Store
