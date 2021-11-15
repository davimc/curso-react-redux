export function reducer(state, action) {
  switch (action.type) {
    case 'numberAdd2':
      return { ...state, number: state.number + 2 }
    case 'numberMultiply7':
      return { ...state, number: state.number * 7 }
    case 'numberParseInt':
      return { ...state, number: parseInt(state.number) }
    case 'numberDivide25':
      return { ...state, number: state.number / 25 }
    case 'numberAddN':
      return { ...state, number: state.number + action.payload }
    case 'login':
      return { ...state, user: { name: action.payload } }
    default:
      return state
  }
}
