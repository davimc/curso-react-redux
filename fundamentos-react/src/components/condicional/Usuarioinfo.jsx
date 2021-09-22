import React from 'react'
import If, { Else } from './If'

export default props => {
    const usuario = props.usuario || {};
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <span>Olá! Seja bem-vindo <strong>{usuario.nome}</strong>!</span>
                <Else>
                    {console.log("entrei")}
                    <span>Olá! Seja bem-vindo <strong>Amigão</strong>!</span>
                </Else>
            </If>
        </div>
    );
}