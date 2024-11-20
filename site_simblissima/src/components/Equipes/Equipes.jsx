import React from 'react';
import Carrossel from '../Carrossel/Carrossel';
import { Container } from './Styles';

const Equipes = () => {
    return (
        <Container>
            <section id="equipes" className='container'>
                <h2>Equipes</h2>
                <Carrossel />
            </section>
        </Container>
    );
}

export default Equipes;