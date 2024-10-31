import React from 'react';
import { Container } from './Styles';
function Nav() {
  return (
    <Container>
      <nav>
        <img src="" alt="Logo" />
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <a href="#programacao">Programação</a>
            <a href="#como-chegar">Como Chegar</a>
            <a href="#ingresso">Ingresso</a>
            <a href="#usos-gerais">Usos Gerais</a>
            <a href="#acomodacao">Acomodação</a>
            <a href="#equipes">Equipes</a>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Nav;
