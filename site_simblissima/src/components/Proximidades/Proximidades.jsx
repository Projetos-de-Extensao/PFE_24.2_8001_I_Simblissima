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
                <div className='mapa responsive-mapa'>
                    <Mapa selectedPlace={selectedPlace} />
                </div>

                <div className="proximidades-descricao">
                    <h3>Hospital</h3>

                    <p>Hospital Albert Einstein:  <a href="https://maps.app.goo.gl/4k1qWur7GM71LeSE9"> Endereço: Av. Albert Einstein, 627/701 - Morumbi, São Paulo - SP, 05652-900</a> </p>
                    <p>Centro Médico São José:  <a href="https://maps.app.goo.gl/1hUamSfwS74FPxYP6"> Endereço: R. Martiniano de Carvalho, 965 - Bela Vista, São Paulo - SP, 01323-030</a> </p>
                    <p>Hospital Santa Rita:  <a href="https://maps.app.goo.gl/W81W8MX4h147n8md9"> Endereço: R. Cubatão, 1190 - Vila Mariana, São Paulo - SP, 04013-004</a> </p>
                    <p>Hospital Sírio Libanês:  <a href="https://maps.app.goo.gl/kNrwhTTVpYyafMpr9"> Endereço: Rua Dona Adma Jafet, 91, Rua Dona Adma Jafet, 115 - Bela Vista, São Paulo - SP, 01308-050</a> </p>
                    <p>Blanc Hospital:  <a href="https://maps.app.goo.gl/NT6bJvhLdMVvoLXy8"> Endereço: Av. dos Bandeirantes, 679 - Vila Olímpia, São Paulo - SP, 04553-010</a> </p>


                    <h3>Hoteis</h3>

                    <p>Hotel Goática:  <a href="https://maps.app.goo.gl/gCrEoFQ5r1hpXnPT6"> Endereço: R. Ática, 590 - Campo Belo, São Paulo - SP, 04634-042</a> </p>
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

                    <h3>Delegacias</h3> {/* Temos que ver a parte de Delegacias!! */}

                    <p>102° Distrito Policial (Socorro): <a href="https://www.google.com/maps/search/-23.675520590215722,+-46.712377865049646?sa=X&ved=1t:242&ictx=111"> Endereço: Rua Dr. Rubens Gomes Bueno, 111 - Socorro, São Paulo - SP, 04773-000</a></p>
                    <p>Delegação de Polícia 27ª DP (Interlagos): <a href="https://www.google.com/maps/search/-23.71138321243358,+-46.70804935953138?sa=X&ved=1t:242&ictx=111"> Endereço: Rua Engenheiro Antônio de Souza, 69 - Interlagos, São Paulo - SP, 04801-000</a></p>
                    <p>Delegação de Polícia 49ª DP (Pinheiros): <a href="https://www.google.com/maps/search/-23.589718103021053,+-46.66747317791252?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 282, Vila Progredior, São Paulo - SP, 04772-080</a></p>

                    <h3>Restaurantes</h3>
                    <p>1847 Wine & Beer Bistro: <a href="https://www.google.com/maps/search/-23.6108,+-46.6950?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 290, Vila Progredior, São Paulo - SP, 04772-080</a></p>
                    <p>Harvest Restaurant: <a href="https://www.google.com/maps/search/-23.6119,+-46.6963?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 290, Vila Progredior, São Paulo - SP, 04772-080</a></p>
                    <p>Stanley's Fish and Chips: <a href="https://www.google.com/maps/search/-23.6132,+-46.6959?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 310, Vila Progredior, São Paulo - SP, 04772-080</a></p>
                    <p>Brooklin Pub: <a href="https://www.google.com/maps/search/-23.6135,+-46.6966?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 315, Vila Progredior, São Paulo - SP, 04772-080</a></p>
                    <p>The Goodberry: <a href="https://www.google.com/maps/search/-23.6109,+-46.6948?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 320, Vila Progredior, São Paulo - SP, 04772-080</a></p>
                    <p>WOKIN Express: <a href="https://www.google.com/maps/search/-23.6113,+-46.6955?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 330, Vila Progredior, São Paulo - SP, 04772-080</a></p>
                    <p>Bangrak Thai Street Food: <a href="https://www.google.com/maps/search/-23.6115,+-46.6960?sa=X&ved=1t:242&ictx=111"> Endereço: Rua dos Três Irmãos, 340, Vila Progredior, São Paulo - SP, 04772-080</a></p>
                    <p>Barbacoa Churrascaria: <a href="https://www.google.com/maps/place/23%C2%B036'41.8%22S+46%C2%B041'42.7%22W/@-23.6116,-46.6952,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-23.6116!4d-46.6952?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"> Endereço: Rua Dr. Renato Paes de Barros, 65 - Itaim Bibi, São Paulo - SP, 04530-000</a></p>
                    <p>Bar Brahma: <a href="https://www.google.com/maps/search/-23.6134,+-46.6967?sa=X&ved=1t:242&ictx=111"> Endereço: Av. São João, 677 - Centro Histórico de São Paulo, São Paulo - SP, 01036-000</a></p>

                    <h3></h3>
                </div>
            </section>
        </Container>

        </>
    );
};

export default Proximidades;