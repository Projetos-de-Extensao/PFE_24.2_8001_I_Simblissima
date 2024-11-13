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
                    <h3>Hospital</h3>

                    <p>Hospital Albert Einstein:  <a href="https://maps.app.goo.gl/4k1qWur7GM71LeSE9"> Endereço: Av. Albert Einstein, 627/701 - Morumbi, São Paulo - SP, 05652-900</a> </p>
                    <p>Centro Médico São José:  <a href="https://maps.app.goo.gl/1hUamSfwS74FPxYP6"> Endereço: R. Martiniano de Carvalho, 965 - Bela Vista, São Paulo - SP, 01323-030</a> </p>
                    <p>Hospital Santa Rita:  <a href="https://maps.app.goo.gl/W81W8MX4h147n8md9"> Endereço: R. Cubatão, 1190 - Vila Mariana, São Paulo - SP, 04013-004</a> </p>
                    <p>Hospital Sírio Libanês:  <a href="https://maps.app.goo.gl/kNrwhTTVpYyafMpr9"> Endereço: Rua Dona Adma Jafet, 91, Rua Dona Adma Jafet, 115 - Bela Vista, São Paulo - SP, 01308-050</a> </p>
                    <p>Blanc Hospital:  <a href="https://maps.app.goo.gl/NT6bJvhLdMVvoLXy8"> Endereço: Av. dos Bandeirantes, 679 - Vila Olímpia, São Paulo - SP, 04553-010</a> </p>


                    <h3>Hoteis</h3>

                    <p>Hotel GoÁtica:  <a href="https://maps.app.goo.gl/gCrEoFQ5r1hpXnPT6"> Endereço: R. Ática, 590 - Campo Belo, São Paulo - SP, 04634-042</a> </p>
                    <p>Hotel Blue Tree Premium:  <a href="https://maps.app.goo.gl/7EJpmCXzMD73WgrK7"> Endereço: Av. Roque Petroni Júnior, 1000 - Vila Gertrudes, São Paulo - SP, 04707-000</a> </p>
                    <p>Hotel Mercure:  <a href="https://maps.app.goo.gl/ms77N43E2dU87ybV7"> Endereço: Rua Professor Manoelito de Ornellas, 104 - Chácara Santo Antônio, São Paulo - SP, 04719-040</a> </p>
                    <p>Hotel Ibis:  <a href="https://maps.app.goo.gl/Y2CUZr6utGPhdVtx9"> Endereço: Av. Roque Petroni Júnior, 800 - Torre I - Brooklin, São Paulo - SP, 04707-000</a> </p>
                    <p>Hotel OYO:  <a href="https://maps.app.goo.gl/eNEqULneDoe2m9B16"> Endereço: Av. Santo Amaro, 3484 - Brooklin, São Paulo - SP, 04562-000</a> </p>

                    <h3>Atrativos</h3>

                    <p>Avenida Paulista:  <a href="https://maps.app.goo.gl/ZaSdvdE9x89xVDyx9"> Endereço: Av. Paulista</a> </p>
                    <p>MASP:  <a href="https://maps.app.goo.gl/peTXZTLawnX12Air8"> Endereço: Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</a> </p>
                    <p>Zoológico:  <a href="https://maps.app.goo.gl/SbEYdv58qvcd1BHeA"> Endereço: Av. Miguel Estefano, 4241 - Água Funda, São Paulo - SP, 04301-905</a> </p>
                    <p>USP:  <a href="https://maps.app.goo.gl/aR5uUK55Ddm81pLe6"> Endereço: R. da Reitoria, 374 - Butantã, São Paulo - SP, 05508-220</a> </p>
                    <p>Morumbi:  <a href="https://maps.app.goo.gl/jsJcQfxikcZ4WfXq5"> Endereço: Praça Roberto Gomes Pedrosa, 1 - Morumbi, São Paulo - SP, 05653-070</a> </p>
                    <p>Jardim Botânico:  <a href="https://maps.app.goo.gl/gKre2pwBddKRus3WA"> Endereço: Av. Miguel Estefano, 3031 - Vila Água Funda, São Paulo - SP, 04301-905</a> </p>   
                    <p>Ibirapuera:  <a href="https://maps.app.goo.gl/ECogcwfkGVbGe6D49"> Endereço: Ibirapuera</a> </p>   
                    <p>Aquário de São Paulo:  <a href="https://maps.app.goo.gl/EAkwgU25Da9A1Bu77"> Endereço: R. Huet Bacelar, 407 - Vila São José, São Paulo - SP, 04275-000</a> </p>                       

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