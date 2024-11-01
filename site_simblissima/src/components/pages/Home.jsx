import React from 'react';
import ComoChegar from '../ComoChegar/ComoChegar';
import Ingresso from '../Ingresso/Ingresso';
import Nav from '../Nav/Nav';
import { Container } from './styles';

function Home() {
  return (
    <>
      <Nav/>

      <Container>
        <ComoChegar />
        <Ingresso />
      </Container>

"
      </>
  );
}

export default Home;