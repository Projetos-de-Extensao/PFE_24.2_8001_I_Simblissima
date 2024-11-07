import React from 'react';
import ComoChegar from '../ComoChegar/ComoChegar';
import Ingresso from '../Ingresso/Ingresso';
import Nav from '../Nav/Nav';
import { Container } from './styles';
import Programacao from '../Programacao/Programacao';
import Sobre from '../Sobre/Sobre';


function Home() {
  return (

    <>
      <Nav/>
      <Container>
        <Programacao/>
        <ComoChegar/>
        <Ingresso/>
        <Sobre/>
      </Container>
    </>

  );
}

export default Home;