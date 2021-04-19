import React from "react"

import "./styles.scss"

export default function Navbar() {
  return (
    <header className="menu-bg">
      <div className="menu">
        <div className="menu-logo">
          <a href="#">FlexBlog</a>
        </div>
        <nav>
          <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Preço</a>
          </li>
          <li>
            <a href="#">Qualidade</a>
          </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
