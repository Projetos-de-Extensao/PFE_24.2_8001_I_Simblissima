import React, { useState } from 'react';
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
    "Alpine: Representando a Renault, com Pierre Gasly e Esteban Ocon. Focada em se estabelecer como uma força no meio do pelotão.",
    "Aston Martin: Equipe em ascensão com Fernando Alonso e Lance Stroll. Tem mostrado grande potencial e melhorias constantes.",
    "Ferrari: Uma das equipes mais icônicas da F1, com Charles Leclerc e Carlos Sainz. Sempre uma forte competidora, especialmente em circuitos rápidos.",
    "Haas: Equipe americana com Kevin Magnussen e Nico Hülkenberg. Conhecida por sua abordagem pragmática e foco em maximizar recursos",
    "McLaren: Equipe britânica com uma rica história na F1. Atualmente, tem Lando Norris e Oscar Piastri como pilotos principais.",
    "Mercedes-AMG Petronas: Equipe de Lewis Hamilton e George Russell. Tem uma longa história de sucesso e é conhecida por sua engenharia de ponta.",
    "Racing Bulls: Equipe irmã da Red Bull, com Yuki Tsunoda e Daniel Ricciardo. Serve como plataforma de desenvolvimento para jovens talentos.",
    "Red Bull Racing: Dominante nos últimos anos, com Max Verstappen liderando a equipe. Conhecida por sua inovação e desempenho consistente.",
    "Stake Sauber: Equipe com Valtteri Bottas e Guanyu Zhou. Tem uma parceria técnica com a Sauber e busca melhorar seu desempenho.",
    "Williams: Equipe histórica que está em processo de reconstrução. Tem Alex Albon e Logan Sargeant como pilotos."
  ];

const Carrossel = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleSelect = (selectedIndex) => {
        setSelectedTeam(selectedIndex);
    };

    return (
        <>
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
                <div className="team-description"><br />
                    <h3>Descrição do Time</h3>
                    <p>{teamDescriptions[selectedTeam]}</p>
                </div>
            )}
        </>
    );
};

export default Carrossel;