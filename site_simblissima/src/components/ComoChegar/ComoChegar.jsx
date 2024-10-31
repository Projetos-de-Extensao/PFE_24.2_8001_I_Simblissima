import React from 'react';
import { Container } from './Styles';

function ComoChegar() {
    return (
        
    <>
    <Container>
    <div className="container">
    

            <section className="section">
                <h2>Como Chegar ao Autódromo de Interlagos</h2>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14208.565606748036!2d-46.7086213318472!3d-23.703727503047602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fc83e9584af%3A0x2ffcdc07da2ca5c0!2sAut%C3%B3dromo%20Jos%C3%A9%20Carlos%20Pace!5e1!3m2!1spt-BR!2sbr!4v1730393247714!5m2!1spt-BR!2sbr"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div><br />
                <h3>De Carro</h3>
                <p><strong>Endereço:</strong> Av. Sen. Teotônio Vilela, 261 - Interlagos, São Paulo - SP, 04801-000</p>
                <p><strong>Roteiro:</strong> Use aplicativos de navegação como Google Maps ou Waze para obter rotas em tempo real. 
                O trajeto pode ser afetado por congestionamentos, especialmente durante eventos.</p><br />
                
                <h3>Transporte Público</h3>
                <p><strong>Metrô:</strong> A estação mais próxima é a <strong>Estação Interlagos</strong> (Linha 9 - Esmeralda). De lá, você pode pegar um ônibus ou um táxi até o autódromo.</p>
                <p><strong>Ônibus:</strong> Vários ônibus passam pela região. Verifique a linha que atende ao seu ponto de partida. 
                A linha <strong>5501-10</strong> (Interlagos - Metrô Jabaquara) é uma boa opção.</p><br />
                
                <h3>Bicicleta</h3>
                <p>Há ciclofaixas nas proximidades. Se você optar por ir de bicicleta, 
                    procure estacionar em locais seguros ao redor do autódromo.</p><br />
                
                <h3>Dicas</h3>
                <ul>
                    <li><strong>Chegue Cedo:</strong> O trânsito pode ser intenso em dias de corrida. Tente chegar pelo menos 2 horas antes do início do evento.</li>
                    <li><strong>Estacionamento:</strong> Verifique as opções de estacionamento disponíveis no autódromo e nas proximidades. Pode haver áreas específicas para eventos.</li>
                    <li><strong>Planeje sua Volta:</strong> Após o evento, a demanda por transporte pode ser alta. Considere sair mais cedo ou optar por caronas.</li><br />
                </ul>

                <h3>Informações Adicionais</h3>
                <p>Consulte o site oficial do evento para atualizações sobre transporte e estacionamento, além de dicas de segurança.</p><br />
                
                <button className="button">Saiba Mais</button>
            </section>
        </div>

    </Container>
    </>
    );
}

export default ComoChegar