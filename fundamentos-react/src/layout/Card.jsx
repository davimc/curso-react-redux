import "./Card.css"
import React from "react"

export default props => {

	const estilo = {
		backgroundColor: props.color || '#F00',
		borderColor: props.color || '#F00',
	}

  return(
    <div className="Card" style={estilo}>
      <h1 className="Title">{props.title}</h1>
      <h2 className="Content">{props.children}</h2>
    </div>
  )
}
