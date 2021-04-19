import React from "react"
import Navbar from "../../components/navbar"
import Topbar from "../../components/topbar"

import "./styles.scss"

import sobre1 from "../../assets/sobre1.jpg"
import sobre2 from "../../assets/sobre2.jpg"
import produtos1 from "../../assets/produtos1.jpg"
import produtos2 from "../../assets/produtos2.jpg"
import produtos3 from "../../assets/produtos3.jpg"
import Footer from "../../components/footer"

export default function Main() {
  return (
    <div>
      <Topbar />
      <Navbar />

      <h1 className="introducao">
        Novos Valores e<br />
        Propriedades de CSS
      </h1>

      <section className="sobre" id="sobre">
        <div className="sobre-info">
          <h1>Sobre</h1>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>
        </div>
        <div className="sobre-img">
          <img src={sobre1} alt="sobre1" />
        </div>
        <div className="sobre-img">
          <img src={sobre2} alt="sobre2" />
        </div>
      </section>

      <section className="produtos" id="produtos">
        <h1>Produtos</h1>
        <div className="produtos-container">
          <div className="produtos-item purple">
            <h2>Purple</h2>
            <img src={produtos1} alt="produtos1" />
          </div>
          <div className="produtos-item pink">
            <h2>Pink</h2>
            <img src={produtos2} alt="produtos2" />
          </div>
          <div className="produtos-item blue">
            <h2>Blue</h2>
            <img src={produtos3} alt="produtos3" />
          </div>
        </div>
      </section>

      <section className="preco" id="preco">
        <div className="preco-item">
          <h2>Cobre</h2>
          <span>
            <sup>R$</sup>19
          </span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24h</li>
          </ul>
          <a href="#">Comprar</a>
        </div>

        <div className="preco-item">
          <h2>Prata</h2>
          <span>
            <sup>R$</sup>39
          </span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24h</li>
            <li>Compra Exclusiva</li>
          </ul>
          <a href="#">Comprar</a>
        </div>

        <div className="preco-item">
          <h2>Ouro</h2>
          <span>
            <sup>R$</sup>79
          </span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24h</li>
            <li>Compra Exclusiva</li>
            <li>Download dos Itens</li>
          </ul>
          <a href="#">Comprar</a>
        </div>
      </section>

      <section className="qualidade" id="qualidade">
        <div className="qualidade-item">
          <h2>Inteligente</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão
          </p>
        </div>

        <div className="qualidade-item">
          <h2>Compacto</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>

        <div className="qualidade-item">
          <h2>Econômico</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão
          </p>
        </div>

        <div className="qualidade-item">
          <h2>Transparente</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão
          </p>
        </div>

        <div className="qualidade-item">
          <h2>Opaco</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>

        <div className="qualidade-item">
          <h2>Sustentável</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão
          </p>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-info">
          <h1>Newsletter</h1>
          <p>assine e fique por dentro das novidades</p>
        </div>
        <form className="newsletter-form">
          <input type="text" placeholder="Seu e-mail" />
          <button type="submit">Assinar</button>
        </form>
      </section>

      <Footer />
    </div>
  )
}
