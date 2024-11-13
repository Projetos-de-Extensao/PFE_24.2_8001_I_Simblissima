import React, { useState } from 'react';
import { Container } from './Styles';
import Mapa from '../Mapa/Mapa';
import Dropdown from '../Dropdown-Mapa/Dropdown';

const Proximidades = () => {
    const [selectedPlace, setSelectedPlace] = useState('');
    
    return (
        <>
        <Container>
            <section className="container" id="proximidades">
                <h2 className='titulo-section'>Proximidades</h2>

                <Dropdown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
                <div className='mapa'>
                    <Mapa selectedPlace={selectedPlace} />
                </div>

                <div class="container explicacoes">
                    <h3>Hoteis</h3>
                    <p>Hotel Coloca o nome: endereço e link pra pagina deles do maps</p>

                    <h3>Delegacias</h3>
                    <p>Delegacia Coloca o nome: endereço e link pra pagina deles do maps</p>
                    
                    <h3>Restaurantes</h3>
                    <p>Restaurante Coloca o nome: endereço e link pra pagina deles do maps</p>
                    <h3></h3>
                    {/* Ai aqui vcs continuam, e de baixo de cada um dos h3 coloca um p explicando cada coisa */}
                </div>
            </section>
        </Container>

        </>
    );
};

export default Proximidades;