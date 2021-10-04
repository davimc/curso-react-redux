import React from 'react'
import { useLocation } from 'react-router-dom';

function NotFound() {
    let location = useLocation();
    return (
        <div className="NotFound">
            <h1>Componente NotFound</h1>
            <h2>url: {location.pathname} não encontrada :(</h2>
        </div>
    );
}

export default NotFound;