import './Button.css'
import React from 'react'

export default function Button(props) {
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={`
            button
            ${props.op ? 'op' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button>
    )
}