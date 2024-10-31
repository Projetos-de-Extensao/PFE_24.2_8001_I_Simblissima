import React from 'react';
import { Container } from './Styles';

function ComoChegar() {
    return (
        
    <>
    <Container>
    <div className="container">
            <section className="section">
                <h2>Como Chegar ao Autódromo de Interlagos</h2>
                
                <h3>De Carro</h3>
                <p><strong>Endereço:</strong> Av. Sen. Teotônio Vilela, 261 - Interlagos, São Paulo - SP, 04801-000</p>
                <p><strong>Roteiro:</strong> Use aplicativos de navegação como Google Maps ou Waze para obter rotas em tempo real. O trajeto pode ser afetado por congestionamentos, especialmente durante eventos.</p>
                
                <h3>Transporte Público</h3>
                <p><strong>Metrô:</strong> A estação mais próxima é a <strong>Estação Interlagos</strong> (Linha 9 - Esmeralda). De lá, você pode pegar um ônibus ou um táxi até o autódromo.</p>
                <p><strong>Ônibus:</strong> Vários ônibus passam pela região. Verifique a linha que atende ao seu ponto de partida. A linha <strong>5501-10</strong> (Interlagos - Metrô Jabaquara) é uma boa opção.</p>
                
                <h3>Bicicleta</h3>
                <p>Há ciclofaixas nas proximidades. Se você optar por ir de bicicleta, procure estacionar em locais seguros ao redor do autódromo.</p>
                
                <h3>Dicas</h3>
                <ul>
                    <li><strong>Chegue Cedo:</strong> O trânsito pode ser intenso em dias de corrida. Tente chegar pelo menos 2 horas antes do início do evento.</li>
                    <li><strong>Estacionamento:</strong> Verifique as opções de estacionamento disponíveis no autódromo e nas proximidades. Pode haver áreas específicas para eventos.</li>
                    <li><strong>Planeje sua Volta:</strong> Após o evento, a demanda por transporte pode ser alta. Considere sair mais cedo ou optar por caronas.</li>
                </ul>

                <h3>Informações Adicionais</h3>
                <p>Consulte o site oficial do evento para atualizações sobre transporte e estacionamento, além de dicas de segurança.</p>
                
                <button className="button">Saiba Mais</button>
            </section>
        </div>

    </Container>
    </>
    );
}

export default ComoChegar