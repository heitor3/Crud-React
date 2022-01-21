import React from 'react';

import Logo from '../../../assets/images/hacker.gif'

import './styles.css';

export default props =>
  <aside className='logo'>
    <a href="/" className="logo">
      <img src={ Logo } alt="Logo" />
    </a>
  </aside>