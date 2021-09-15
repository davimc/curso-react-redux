import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import Propriedade from './components/basicos/Propriedade';
import Aleatorio from './components/basicos/Aleatorio'

export default _ => {
    return (
        <div>
            <Aleatorio max={14} min={6} />
            <Propriedade
                titulo="Estou aprendendo react"
                descricao="Espero que você esteja tão empolgado quanto eu estou :)" />
            <Primeiro />

        </div>
    )
}