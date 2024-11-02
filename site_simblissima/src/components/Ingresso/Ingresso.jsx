import React from 'react';
import { Container } from './Styles';

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
      <section className="section">
        <h2>Venda de ingressos do evento</h2>

        <h2>Fanzone:</h2>
        <p >A Fanzone nos eventos de Fórmula 1 é uma área destinada aos fãs, onde eles podem participar de várias atividades relacionadas ao automobilismo.</p>
        <ul>
          <li>Atividades interativas: Jogos, simuladores de corrida e competições.</li>
          <li>Exibições: Telões mostrando corridas ao vivo, vídeos e entrevistas.</li>
          <li>Loja de produtos: Mercadorias oficiais da F1, como roupas e acessórios.</li>
          <li>Encontros: Oportunidades para conhecer pilotos, equipes ou celebridades do esporte.</li>
        </ul><br />

        <h2>O evento:</h2>
        <p>A corrida de Fórmula 1 é uma competição automobilística de alta velocidade, realizada em circuitos fechados ao redor do mundo. Os eventos
          consistem em uma série de voltas, onde os pilotos competem em carros projetados para desempenho máximo. As corridas geralmente incluem:</p>
        <ul>
          <li>Qualificatória: Define a posição de largada dos pilotos.</li>
          <li>Largada: Os carros partem de um grid em uma contagem regressiva.</li>
          <li>Estratégias de pit stop: Os pilotos fazem paradas para trocar pneus e reabastecer, influenciando o desempenho.</li>
          <li>Pontos: Os pilotos e equipes acumulam pontos com base na classificação final, que determina os campeões da temporada.</li>
        </ul>

          <div className="button-container">
            <button class='button' onClick={handleComprarIngressos}>
              Comprar ingressos da corrida
            </button>

            <button className='button' onClick={handleFanZone}>
              Comprar ingressos da Fanzone
            </button>
          </div>
          </section>

      </div>
    </Container>
  );
}

export default Ingressos;