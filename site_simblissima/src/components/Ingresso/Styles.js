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
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) -3px 0px 12px -3px, rgba(0, 0, 0, 0.2) 3px 0px 12px -3px;
}

figure.legenda-compra {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    }

.legenda-compra img {
    border-radius: 15px;
    width: 600px;
    height: 600px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.botao-container {
  display: flex;
  justify-content: right;
  margin-top: 20px;
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
ul {
    padding-left: 60px;
}

ul li {
    margin: 10px 0;
}

a {
    color: #0056b3;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    .legenda-compra img {
    width: 300px;
    height: 300px;
    }
}

@media (min-width: 1000px) {
    .container {
        max-width: 1200px;
    }
}
`;
export { Container };