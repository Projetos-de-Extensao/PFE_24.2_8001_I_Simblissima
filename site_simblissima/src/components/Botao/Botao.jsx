import React from 'react';
import { StyledWrapper } from './Styles';


const Botao = ({ text, action }) => {
  return (
    <StyledWrapper>
      <button onClick={action} className="button-82-pushable" role="button">
        <span className="button-82-shadow" />
        <span className="button-82-edge" />
        <span className="button-82-front text">{text}</span>
    </button>
    </StyledWrapper>
  );
};

export default Botao;


