import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import Propriedade from './components/basicos/Propriedade';
import Aleatorio from './components/basicos/Aleatorio'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Notas from './components/repeticao/Notas'
import Produtos from './components/repeticao/Produtos'
import ParOuImpar from './components/condicional/ParOuImpar';
import Usuarioinfo from './components/condicional/Usuarioinfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';

import Card from './components/layout/Card.jsx'

export default _ => {
    return (
        <div className="App">
            <h1>Fundamentos do React</h1>
            <div className="Cards">
                <Card title="#10 - Componente Controlado" color="#6E9ECF">
                    <Input/>
                </Card>
                <Card title="#09 - Comunicacao Indireta" color="#7F7F7F">
                    <IndiretaPai/>
                </Card>
                <Card title="#08 - Comunicacao Direta" color="#24A8AC">
                    <DiretaPai/>
                </Card>
                <Card title="#07 - Renderização Condicional" color="#DA4624">
                    <ParOuImpar numero={1} />
                    <Usuarioinfo usuario={{ nome: "Davi" }} />
                </Card>
                <Card title="#06 - Desafio repetição" color="#DC403B">
                    <Produtos />
                </Card>
                <Card title="#05 - Nota de alunos" color="#F2E394">
                    <Notas></Notas>
                </Card>
                <Card title="#04 - Componente com filhos" color="#CD5C5C">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Gustavo" />
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
