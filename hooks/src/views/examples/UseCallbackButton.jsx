import React from 'react'

const UseCallbackButton = props => {
  {
    console.log('render')
  }
  return (
    <div className="center">
      <button className="btn" onClick={() => props.inc(6)}>
        +6
      </button>
      <button className="btn" onClick={() => props.inc(12)}>
        +12
      </button>
      <button className="btn" onClick={() => props.inc(18)}>
        +18
      </button>
    </div>
  )
}
export default React.memo(UseCallbackButton)
