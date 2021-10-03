import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="Menu">
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/param/123">Param #01</Link></li>
          <li><Link to="/param/legal">Param #02</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
