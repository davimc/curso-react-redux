import './Produtos.css'
import React from 'react'

import produtos from '../../data/produtos'

export default _ => {
    const tabelaProdutos = produtos.map((produto) => {
        return (
            <tr key={produto.id} className={produto.id%2==0? 'Par':'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    });
    return (
        <div>
            <table border="1" className="TabelaProdutos">
                <thead>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>preço</th>
                </tr>
                </thead>
                <tbody>
                {tabelaProdutos}
                </tbody>
            </table>
        </div>
    )
}