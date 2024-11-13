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
                    <p>Hotel GoÁtica:  <a href="https://maps.app.goo.gl/gCrEoFQ5r1hpXnPT6"> Endereço: R. Ática, 590 - Campo Belo, São Paulo - SP, 04634-042</a> </p>
                    <p>Hotel Blue Tree Premium:  <a href="https://maps.app.goo.gl/7EJpmCXzMD73WgrK7"> Endereço: Av. Roque Petroni Júnior, 1000 - Vila Gertrudes, São Paulo - SP, 04707-000</a> </p>
                    <p>Hotel Mercure:  <a href="https://maps.app.goo.gl/ms77N43E2dU87ybV7"> Endereço: Rua Professor Manoelito de Ornellas, 104 - Chácara Santo Antônio, São Paulo - SP, 04719-040</a> </p>
                    <p>Hotel Ibis:  <a href="https://maps.app.goo.gl/Y2CUZr6utGPhdVtx9"> Endereço: Av. Roque Petroni Júnior, 800 - Torre I - Brooklin, São Paulo - SP, 04707-000</a> </p>
                    <p>Hotel OYO:  <a href="https://maps.app.goo.gl/eNEqULneDoe2m9B16"> Endereço: Av. Santo Amaro, 3484 - Brooklin, São Paulo - SP, 04562-000</a> </p>

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