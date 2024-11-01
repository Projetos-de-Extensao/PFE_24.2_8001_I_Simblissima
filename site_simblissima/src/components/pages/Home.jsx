import React from 'react';
import ComoChegar from '../ComoChegar/ComoChegar';
import Ingresso from '../Ingresso/Ingresso';
import Nav from '../Nav/Nav';
import { Container } from './styles';
import Programacao from '../Programacao/Programacao';

function Home() {
  return (
    <>
      <Nav/>
      <Container>
        <Programacao/>
        <ComoChegar/>
        <Ingresso/>
      </Container>

"
      </>
  );
}

export default Home;