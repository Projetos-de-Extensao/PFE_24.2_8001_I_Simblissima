import React, { useState } from 'react';
import { Container } from './styles';
import Card from '../card-prog/Card';
import Carousel from 'react-bootstrap/Carousel';

// Importando imagens das equipes já que não foi possível importar de forma dinâmica
import alpine from '../../media/equipes/carro-alpine.jpg';
import astonmartin from '../../media/equipes/carro-astonmartin.jpg';
import ferrari from '../../media/equipes/carro-ferrari.jpg';
import mercedes from '../../media/equipes/carro-mercedes.jpg';
import racingbulls from '../../media/equipes/carro-racingbulls.jpg';
import redbull from '../../media/equipes/carro-redbull.jpg'; 
import stake from '../../media/equipes/carro-stake.jpg';
import williams from '../../media/equipes/carro-williams.jpg';
import mclaren from '../../media/equipes/carro-mclaren.jpg';
import haas from '../../media/equipes/carro-haas.jpg';

const teamDescriptions = [
  "Descrição do time 1",
  "Descrição do time 2",
  "Descrição do time 3",
  "Descrição do time 4",
  "Descrição do time 5",
  "Descrição do time 6",
  "Descrição do time 7",
  "Descrição do time 8",
  "Descrição do time 9",
  "Descrição do time 10"
];

const Sobre = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSelect = (selectedIndex) => {
    setSelectedTeam(selectedIndex);
  };

  return (
    <Container>
      <section id="sobre" className='container'>
        <h2>Sobre Nós</h2>
        <p>
          Bem-vindo ao nosso site! Somos apaixonados por Fórmula 1 e queremos garantir que sua experiência em Interlagos, São Paulo, seja inesquecível. Criamos este espaço para ajudar fãs de todo o mundo a aproveitar ao máximo a temporada de F1, com dicas e orientações personalizadas.
        </p>
        <h3>Nossa Missão</h3>
        <p>
          Nossa missão é facilitar a vida dos visitantes que vêm a São Paulo para assistir à Fórmula 1.
          Queremos que você tenha uma experiência tranquila e divertida, com acesso às melhores informações sobre transporte, hospedagem, alimentação, e atividades na cidade.
        </p>
        <h3>Quem Somos</h3>
        <p>
          Somos uma equipe de entusiastas da F1. Combinamos nosso amor pelo esporte com o conhecimento local para fornecer as melhores recomendações para sua estadia durante o evento. Conhecemos as melhores rotas, restaurantes e pontos turísticos para completar a sua visita.
        </p>
        <h3>O Que Oferecemos</h3>
        <p>
          Neste site, você encontrará tudo o que precisa saber para planejar sua viagem para o evento em Interlagos: guias detalhados de transporte, opções de hospedagem, sugestões de restaurantes próximos, e dicas para explorar São Paulo além das pistas.
        </p>
        <h3>Por Que Escolher a Gente?</h3>
        <p>
          Diferente de outros sites, nosso conteúdo é feito sob medida para os fãs de F1 que querem uma experiência autêntica em São Paulo. Sabemos o que é importante para quem vem assistir à Fórmula 1 e estamos aqui para garantir que você aproveite cada momento ao máximo.
        </p>
        <h3>Vamos Começar?</h3>
        <p>
          Explore o site para conhecer mais dicas e não hesite em entrar em contato para tirar dúvidas. Estamos aqui para tornar sua experiência inesquecível!
        </p>
        <Carousel onSelect={handleSelect} fade className="custom-carousel">
          <Carousel.Item>
            <img src={alpine} alt="Alpine" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={astonmartin} alt="Aston Martin" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={ferrari} alt="Ferrari" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={haas} alt="Haas" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={mclaren} alt="McLaren" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={mercedes} alt="Mercedes" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={racingbulls} alt="Racing Bulls" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={redbull} alt="RedBull Racing" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={stake} alt="Stake Sauber" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={williams} alt="Williams" className="carousel-image" />
          </Carousel.Item>
        </Carousel>
        {selectedTeam !== null && (
          <div className="team-description">
            <h3>Descrição do Time</h3>
            <p>{teamDescriptions[selectedTeam]}</p>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Sobre;