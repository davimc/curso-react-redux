import './Contador.css'
import React, { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import Form from './Form'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial,
        passo: 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    };
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    };
    handlerInput = (novoPasso) => {
        this.setState({
            passo: novoPasso
        });
    };
    render() {
        return (
            <div className="Contador">
                <Display numero={this.state.numero}/>
                <Form passo={this.state.passo} setPasso={this.handlerInput}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>
            </div>
        );
    }
}

export default Contador;