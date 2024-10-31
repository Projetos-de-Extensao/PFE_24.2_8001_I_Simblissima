import React from 'react';
import ComoChegar from '../ComoChegar/ComoChegar';
import Ingresso from '../Ingresso/Ingresso';
import Nav from '../Nav/Nav';

function Home() {
  return (
    <>
      <Nav/>
      <div>        
        <ComoChegar />
        <Ingresso />
      </div>
    </>
  );
}

export default Home;