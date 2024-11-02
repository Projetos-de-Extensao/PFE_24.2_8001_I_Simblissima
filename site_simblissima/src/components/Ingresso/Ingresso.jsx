import React from 'react';
import { Container } from './Styles';
import Botao from '../Botao/Botao';

function Ingressos() {

  const handleComprarIngressos = () => {
    window.open("https://www.eventim.com.br/campaign/f1saopaulo", "_blank");
  };

  const handleFanZone = () => {
    window.open("https://grandepremiosp.f1saopaulo.com.br/fanzone", "_blank");
  };

  return (
    <Container>
      <section className="container" id='ingresso'>
        <h2>Venda de ingressos do evento</h2>
        <figure className="legenda-compra">
          <img class="legenda-compra" src='src/media/f1-map-sc.jpg'></img>
        </figure>
        <h3>Fanzone:</h3>
        <p >A Fanzone nos eventos de Fórmula 1 é uma área destinada aos fãs, onde eles podem participar de várias atividades relacionadas ao automobilismo.</p>
        <ul>
          <li>Atividades interativas: Jogos, simuladores de corrida e competições.</li>
          <li>Exibições: Telões mostrando corridas ao vivo, vídeos e entrevistas.</li>
          <li>Loja de produtos: Mercadorias oficiais da F1, como roupas e acessórios.</li>
          <li>Encontros: Oportunidades para conhecer pilotos, equipes ou celebridades do esporte.</li>
        </ul><br />
        <div className="botao-container">
          <Botao text="Fanzone" action={handleFanZone} />
        </div>

        <h3>O evento:</h3>
        <p>A corrida de Fórmula 1 é uma competição automobilística de alta velocidade, realizada em circuitos fechados ao redor do mundo. Os eventos
          consistem em uma série de voltas, onde os pilotos competem em carros projetados para desempenho máximo. As corridas geralmente incluem:</p>
        <ul>
          <li>Qualificatória: Define a posição de largada dos pilotos.</li>
          <li>Largada: Os carros partem de um grid em uma contagem regressiva.</li>
          <li>Estratégias de pit stop: Os pilotos fazem paradas para trocar pneus e reabastecer, influenciando o desempenho.</li>
          <li>Pontos: Os pilotos e equipes acumulam pontos com base na classificação final, que determina os campeões da temporada.</li>
        </ul>
        <div className="botao-container">
          <Botao text="Ingressos" action={handleComprarIngressos} />
        </div>
          </section>
    </Container>
  );
}

export default Ingressos;