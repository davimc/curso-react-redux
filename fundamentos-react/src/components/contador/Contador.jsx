import './Contador.css'
import React, { Component } from 'react'

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
    handlerInput = (e) => {
        this.setState({
            passo: +e.target.value
        });
    };
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="InputPasso">Passo</label>
                    <input 
                    value={this.state.passo}
                    onChange={this.handlerInput} type="number" id="InputPasso"/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Contador;