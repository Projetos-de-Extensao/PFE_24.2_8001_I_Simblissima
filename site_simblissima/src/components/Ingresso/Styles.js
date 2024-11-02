import styled from 'styled-components';

const Container = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    margin-top: 5px;
}



.legenda-compra picture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    }
    
.legenda-compra img {
    border-radius: 25px;
    width: 100%;
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
    font-size: 3.5rem;
}

h3 {
    font-size: 2.5rem;
}

p {
    margin-bottom: 15px;
    text-align: justify;
}

ul {
    padding-left: 25px;
}

ul li {
    margin: 10px 0;
}

/* Links */
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

    h1, h2, h3 {
        font-size: 1.5em;
    }
}
`;
export { Container };