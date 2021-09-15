import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import Propriedade from './components/basicos/Propriedade';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Fragment>
    <Primeiro />
    <Propriedade 
    titulo="Estou aprendendo react"
    descricao="Espero que você esteja tão empolgado quanto eu estou :)"/>
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
