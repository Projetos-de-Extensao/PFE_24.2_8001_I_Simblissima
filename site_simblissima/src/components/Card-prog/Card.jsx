import React from 'react';
import { StyledWrapper } from './Styles';

function Card() {
    return (

        <StyledWrapper>
            <div className='container-prog'>

                    <div className='itens-prog'>
                        <div className='prog'>
                            <p className='titulo-prog'>Treino Livre</p>
                        </div>
                        <div className='prog-data'>
                            1 nov - Sexta-feira
                        </div>
                        <div className='box-hora'>
                            <div className='prog-hora'>11:30</div>
                        </div>
                    </div>


                    <div className='itens-prog'>
                        <div className='prog'>
                            <p className='titulo-prog'>Sprint Quali</p>
                        </div>
                        <div className='prog-data'>
                            1 nov - Sexta-feira
                        </div>
                        <div className='box-hora'>
                            <div className='prog-hora'>15:30</div>
                        </div>
                    </div>


                    <div className='itens-prog'>
                        <div className='prog'>
                            <p className='titulo-prog'>Sprint</p>
                        </div>
                        <div className='prog-data'>
                            2 nov - Sábado
                        </div>
                        <div className='box-hora'>
                            <div className='prog-hora'>11:00</div>
                        </div>
                    </div>


                    <div className='itens-prog'>
                        <div className='prog'>
                            <p className='titulo-prog'>Classificação</p>
                        </div>
                        <div className='prog-data'>
                            2 nov - Sábado
                        </div>
                        <div className='box-hora'>
                            <div className='prog-hora'>15:00</div>
                        </div>
                    </div>


                    <div className='itens-prog'>
                        <div className='prog'>
                            <p className='titulo-prog'>Corrida</p>
                        </div>
                        <div className='prog-data'>
                            3 nov - Domingo
                        </div>
                        <div className='box-hora'>
                            <div className='prog-hora'>14:00</div>
                        </div>
                    </div>

            </div>
        </StyledWrapper>

    );
  };

  export default Card;

