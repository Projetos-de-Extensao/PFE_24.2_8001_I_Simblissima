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
        <h1>Venda de ingressos do evento</h1>
        <p>Compre seu ingresso para o grande evento ou para a fanzone</p>

        <h2>Fanzone:</h2>
        <p >A Fanzone nos eventos de Fórmula 1 é uma área destinada aos fãs, onde eles podem participar de várias atividades relacionadas ao automobilismo.</p>

        <p>1- Atividades interativas: Jogos, simuladores de corrida e competições.</p>
        <p>2- Exibições: Telões mostrando corridas ao vivo, vídeos e entrevistas.</p>
        <p>3- Loja de produtos: Mercadorias oficiais da F1, como roupas e acessórios.</p>
        <p>4- Encontros: Oportunidades para conhecer pilotos, equipes ou celebridades do esporte.</p>

        <h2>O evento:</h2>

        <p>A corrida de Fórmula 1 é uma competição automobilística de alta velocidade, realizada em circuitos fechados ao redor do mundo. Os eventos consistem em uma série de voltas, onde os pilotos competem em carros projetados para desempenho máximo. As corridas geralmente incluem:</p>

        <p>1- Qualificatória: Define a posição de largada dos pilotos.</p>
        <p>2- Largada: Os carros partem de um grid em uma contagem regressiva.</p>
        <p>3- Estratégias de pit stop: Os pilotos fazem paradas para trocar pneus e reabastecer, influenciando o desempenho.</p>
        <p>4- Pontos: Os pilotos e equipes acumulam pontos com base na classificação final, que determina os campeões da temporada.</p>

        <div>

          <button class='button' onClick={handleComprarIngressos}>
            Comprar ingressos da corrida
          </button>

          <button class='button' onClick={handleFanZone}>
            Comprar ingressos da Fanzone
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Ingressos;