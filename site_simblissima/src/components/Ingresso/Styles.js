import React from 'react';
import { Container } from '../ComoChegar/Styles';
import './Ingressos.css';

function Ingressos() {
  const handleComprarIngressos = () => {
    window.location.href = "https://www.eventim.com.br/campaign/f1saopaulo";
  };

  const handleFanZone = () => {
    window.location.href = "https://grandepremiosp.f1saopaulo.com.br/fanzone";
  };

  return (
    <Container>
      <div className="container" id="ingresso">
        <header className="head">
          <h1>Venda de ingressos do evento</h1>
          <p>
            Compre seu ingresso para o grande evento ou para a fanzone
          </p>
          <button onClick={handleComprarIngressos} className="ComprarIngresso">
            Comprar Ingressos
          </button>
          <button onClick={handleFanZone} className="ComprarFanzone">
            Comprar ingressos da Fanzone
          </button>
        </header>
      </div>
    </Container>
  );
}

export default Ingressos;