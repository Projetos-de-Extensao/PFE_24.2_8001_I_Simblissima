import styled from 'styled-components';

const Container = styled.div`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
}

  .container {
      margin: 0 auto;
      padding: 10px 20px;
      margin-top: 5px;
      margin-bottom: 15px;
      border-radius: 3px;
      box-shadow: rgba(0, 0, 0, 0.3) -3px 0px 12px -3px, rgba(0, 0, 0, 0.2) 3px 0px 12px -3px;
}

  h1, h2, h3 {
    color: red;
    margin-bottom: 15px;
}

    h2 {
  font-size: 2.0rem;
}

  h3 {
    font-size: 1.5rem;
}

p {
    margin: 15px;
    margin-bottom: 15px;
    text-align: justify;
  }


  .proximidades-descricao {
    padding: 10px 20px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 3px;
}


  @media (min-width: 250px) and (max-width: 767px) {

      h2 {
      font-size: 2.5rem;
}

      h3 {
      font-size: 1.5rem;
      }

    .map{
      height: 30vh;
    }
}

@media (min-width: 768px) {

      .container {
          max-width: 720x;
      }

      .map{
        height: 50vh;
      }

  @media (min-width: 1000px) {
      .container {
          max-width: 1200px;
      }

      .map{
        height: 70vh;
      }
}

@media (max-width: 400px) {
    .map{
      height: 20vh;
    }
}

`;

export { Container }