import React from 'react';
import { Container } from '../ComoChegar/Styles';

function Ingressos() {
  const handleComprarIngressos = () => {
    window.location.href = "https://www.eventim.com.br/campaign/f1saopaulo";
  };

  const handleFanZone = () => {
    window.location.href = "https://grandepremiosp.f1saopaulo.com.br/fanzone";
  };

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '1150px',
        width: '100%', 
        backgroundColor: '#f7f7f7',
        padding: '3rem', 
        border: '1px solid #ddd',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem' }}>Venda de ingressos do evento</h1>
        <p style={{ fontSize: '1.5rem' }}>Compre seu ingresso para o grande evento ou para a fanzone</p>

        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Fanzone:</h2>
        <p style={{ fontSize: '1.4rem' }}>A Fanzone nos eventos de Fórmula 1 é uma área destinada aos fãs, onde eles podem participar de várias atividades relacionadas ao automobilismo.</p>

        <p style={{ fontSize: '1.3rem' }}>1- Atividades interativas: Jogos, simuladores de corrida e competições.</p>
        <p style={{ fontSize: '1.3rem' }}>2- Exibições: Telões mostrando corridas ao vivo, vídeos e entrevistas.</p>
        <p style={{ fontSize: '1.3rem' }}>3- Loja de produtos: Mercadorias oficiais da F1, como roupas e acessórios.</p>
        <p style={{ fontSize: '1.3rem' }}>4- Encontros: Oportunidades para conhecer pilotos, equipes ou celebridades do esporte.</p>

        <h2 style={{ fontSize: '2rem', marginTop: '2rem' }}>O evento:</h2>

        <p style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
          A corrida de Fórmula 1 é uma competição automobilística de alta velocidade, realizada em circuitos fechados ao redor do mundo. Os eventos consistem em uma série de voltas, onde os pilotos competem em carros projetados para desempenho máximo. As corridas geralmente incluem:
        </p>

        <p style={{ fontSize: '1.3rem' }}>1- Qualificatória: Define a posição de largada dos pilotos.</p>
        <p style={{ fontSize: '1.3rem' }}>2- Largada: Os carros partem de um grid em uma contagem regressiva.</p>
        <p style={{ fontSize: '1.3rem' }}>3- Estratégias de pit stop: Os pilotos fazem paradas para trocar pneus e reabastecer, influenciando o desempenho.</p>
        <p style={{ fontSize: '1.3rem' }}>4- Pontos: Os pilotos e equipes acumulam pontos com base na classificação final, que determina os campeões da temporada.</p>

        <button onClick={handleComprarIngressos} style={{
          backgroundColor: '#FF0000',
          color: '#FFFFFF',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '1rem',
          fontSize: '1.2rem',
        }}>
          Comprar ingressos da corrida
        </button>

        <button onClick={handleFanZone} style={{
          backgroundColor: '#FF0000',
          color: '#FFFFFF',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '1rem',
          fontSize: '1.2rem',
        }}>
          Comprar ingressos da Fanzone
        </button>
      </div>
    </Container>
  );
}

export default Ingressos;
