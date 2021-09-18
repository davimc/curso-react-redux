import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import Propriedade from './components/basicos/Propriedade';
import Aleatorio from './components/basicos/Aleatorio'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

import Card from './layout/Card.jsx'
export default _ => {
    return (
        <div className="App">
          <h1>Fundamentos do React</h1>
          <div className="Cards">
              <Card title="#04 - Componente com filhos" color="#CD5C5C">
                  <Familia sobrenome="Ferreira">
                      <FamiliaMembro nome="Ana"/>
                      <FamiliaMembro nome="Pedro"/>
                      <FamiliaMembro nome="Gustavo"/>
                  </Familia>
              </Card>
            <Card title="#03 - Número aleatório" color="#FA6900">
              <Aleatorio max={14} min={6} />
            </Card>
            <Card title="#02 - Trabalhando com props" color="#5A6A62">
            <Propriedade
                titulo="Estou aprendendo react"
                descricao="Espero que você esteja tão empolgado quanto eu estou :)" />
            </Card>
            <Card title="#01 - Hello World" color="#DB3340">
              <Primeiro />
            </Card>
          </div>
        </div> 
        )
}
