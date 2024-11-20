import styled from 'styled-components';

const Container = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    line-height: 1.6;
    color: #333;
}

.container {
    margin: 0 auto;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.3) -3px 0px 12px -3px, rgba(0, 0, 0, 0.2) 3px 0px 12px -3px;
}

.espaco {
    height: 15px;
    background-color: #606060;
}

section {
    
    padding: 20px;
    border-radius: 8px;
    padding: 15px 20px;
    margin-bottom: 5px;
}

h1, h2, h3 {
    color: red;
    margin-bottom: 15px;
}

h2 {
    font-size: 2.0rem;
}

@media (min-width: 600px) {
    h2 {
    font-size: 2.5rem;
    }

    h3 {
    font-size: 2.0rem;
    }
}

@media (min-width: 1000px) {
    .container {
        max-width: 1200px;
    }
}



`;

export { Container };
