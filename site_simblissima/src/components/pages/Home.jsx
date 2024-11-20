import React from 'react';
import ComoChegar from '../ComoChegar/ComoChegar';
import Ingresso from '../Ingresso/Ingresso';
import Nav from '../Nav/Nav';
import { Container } from './styles';
import Programacao from '../Programacao/Programacao';
import Sobre from '../Sobre/Sobre';
import Proximidades from '../Proximidades/Proximidades';
import Footer from '../Footer/Footer';
import Equipes from '../Equipes/Equipes';


function Home() {
  return (

    <>
      <Nav/>
      <Container>
        <Programacao/>
        <ComoChegar/>
        <Proximidades/>
        <Ingresso/>
        <Sobre/>
        <Equipes/>
        <Footer/>
      </Container>
    </>

  );
}

export default Home;