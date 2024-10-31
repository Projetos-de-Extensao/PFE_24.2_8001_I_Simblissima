import React from 'react';
import { Container } from './Styles';

function Nav() {
  return (
    <Container>
      <nav>
      <img src="/src/media/logo.png" alt="Logo" />
      <ul>
        <li><a href="#programacao">Programação</a></li>
        <li><a href="#como-chegar">Como Chegar</a></li>
        <li><a href="#ingresso">Ingresso</a></li>
        <li><a href="#usos-gerais">Usos Gerais</a></li>
        <li><a href="#acomodacao">Acomodação</a></li>
        <li><a href="#equipes">Equipes</a></li>
      </ul>      
      </nav>
    </Container>
  );
}

export default Nav;