import React from 'react';

import './styles.css';

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <a href="#/">
        <i className='fa fa-home'></i> Início
      </a>
      <a href="#/">
        <i className='fa fa-user'></i> Usuário
      </a>
    </nav>
  </aside>