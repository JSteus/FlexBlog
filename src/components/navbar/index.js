/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Navbar() {
  return <header>
      <div>
          <a href="#">FlexBlog</a>
      </div>
      <nav>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Preço</a></li>
          <li><a href="#">Qualidade</a></li>
      </nav>
  </header>;
}