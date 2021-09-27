import './Calculadora.css'
import React, { Component } from 'react';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    operation: null,
    previous: '0',
    current: '0'
}

export default class Calculador extends Component {
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);
    }
    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState }
        )
    }
    setOperation(operation) {
        if (this.state.operation !== null)
            this.setState({
                operation: operation === '=' ? null : operation,
                previous: operation === '=' ? eval(this.state.previous + this.state.current) : eval(this.state.previous + this.state.current) + operation,
                current: '0'
            })

        else
            if (operation !== '=')
                this.setState({
                    operation: operation,
                    previous: this.state.current + operation,
                    current: '0'

                });
    }
    addDigit(digit) {
        if (!this.state.current.includes('.') || digit !== '.')
            this.setState({
                current: this.state.current === '0' && digit !== '.' ? digit : this.state.current + digit
            });

    }
    render() {
        return (
            <div className="calculadora">
                <Display value={this.state.current} previousValue={this.state.previous} />

                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} op />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} op />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="+" click={this.setOperation} op />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="-" click={this.setOperation} op />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} op />
            </div>
        )
    }
}