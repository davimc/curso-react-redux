import React from 'react'
import If, { Else } from './If'

export default props => {
    const usuario = props.nome || {};
    const test = usuario && usuario.nome
    return (
        <div>
            <If test={usuario && usuario.nome}>
                console.log({test})
                <span>Olá! Seja bem-vindo <strong>{usuario.nome}</strong>!</span>
                <Else>
                    <span>Olá! Seja bem-vindo <strong>Amigão</strong>!</span>
                </Else>
            </If>
        </div>
    );
}