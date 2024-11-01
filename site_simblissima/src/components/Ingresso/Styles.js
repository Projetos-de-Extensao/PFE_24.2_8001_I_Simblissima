import styled from 'styled-components';

const Container = styled.div`
  /* Reset básico */
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  }

  /* Estilos do body */
  body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
  color: #333;

  }

  /* Container principal */
  .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border:1px solid black;
  margin-top: 5px;
  }

  /* Título da seção */
  h1, h2, h3 {
  color: #0056b3;
  margin-bottom: 15px;
  }

  /* Estilo das seções */
  .section {
  background: #fff;
  padding: 0 20px;
  margin-top: 0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  }

  .button {
    background-color: #FF0000;
    color: #FFFFFF;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 1rem;
    margin-bottom: 0;
    font-size: 1.2rem;
    border: 2px solid #FF0000;
  }

  .button:hover {
    background-color: #FFFFFF;
    color: #FF0000;

  }

  .button-container {
    padding: 10px;
    padding-bottom: 0;
    color: #FF0000;
    display: flex;
    itens-align: center;
    justify-content: center;
  }

`;

export { Container };