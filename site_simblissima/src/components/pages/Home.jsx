import React from 'react';
import ComoChegar from '../ComoChegar/ComoChegar';
import Ingresso from '../Ingresso/Ingresso';

function Home() {
  return (
    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the Home page.</p>
        <ComoChegar />
        <Ingresso />
      </div>
    </>
  );
}

export default Home;