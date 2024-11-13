import React, { useState } from 'react';
import { Container } from './Styles';


function ComoChegar() {
    

    return (
        <>
        <Container>
            <section className="container" id="como-chegar">
                <h2 className='titulo-section'>Como Chegar</h2>
                <p>Para chegar ao autódromo de Interlagos, que se situa na parte sul da capital paulista, existem vários métodos. Entretanto, os que mais recomendamos são os seguintes:</p>

                <h3>Carro</h3>
                <p>Para chegar de carro no autódromo, é interessante levar em conta o trânsito em eventos do calibre da Fórmula 1. Acima, você pode encontrar um mapa que, se aberto, dará mais informações sobre rotas saindo do seu local.</p>
                <p>Entre os dias 1º e 3 de novembro, a CET-SP monitorará o trânsito nos arredores do Autódromo de Interlagos. Para o trânsito externo, ou seja, de visitantes e pessoas que não moram na região, as ruas ao redor do evento estarão bloqueadas. Então, leve isso em consideração.</p>

                <h3>Trem</h3>
                <p>Para chegar ao local por este meio, você deve desembarcar na Estação Autódromo da Linha 9 - Esmeralda dos trens metropolitanos da cidade de São Paulo, localizada a cerca de 800 metros (15 minutos de caminhada) da entrada do evento.</p>
                <p>Nos dias de treinos e da corrida, a ViaMobilidade, concessionária responsável pela operação da Linha 9-Esmeralda, disponibilizará um serviço especial de trens expressos. Os trens sairão das estações Morumbi e Pinheiros, ambas na Linha 9, e seguirão sem paradas até a Estação Autódromo.</p>
                <p>A Estação Pinheiros possui conexão com a Linha 4-Amarela do metrô, facilitando o acesso para pessoas de diversas áreas da capital paulista.</p>

                <h3>Transporte Executivo</h3>
                <p>Caso queira uma opção mais exclusiva e cômoda para o seu transporte até o evento, a empresa <a href="https://www.voudesquad.com.br/" target="_blank">Squad</a> está oferecendo transporte executivo. Alguns dos pontos de partida incluem:</p>
                <ul>
                    <li>Holiday Inn Anhembi</li>
                    <li>Hotel Ibis São Paulo Barra Funda</li>
                    <li>Intercontinental São Paulo</li>
                    <li>Shopping Market Place</li>
                </ul>
                <p>O preço da passagem é de cerca de R$ 260, dando direito à ida e volta, além de um lounge com banheiros, água e carregadores de celulares. Os passageiros embarcarão em vans com bancos reclináveis, banheiros a bordo, água e kit lanche.</p>
                <p>Para conferir os ingressos disponíveis e fazer a compra, basta acessar este <a href="https://www.voudesquad.com.br/evento/gpsp2024" target="_blank">site</a>. As saídas rumo a Interlagos acontecerão às 8h, 9h e 10h, e os retornos, de volta aos pontos de partida, às 16h, 17h e 18h.</p>
            </section>
        </Container>
        </>
    );
}

export default ComoChegar;