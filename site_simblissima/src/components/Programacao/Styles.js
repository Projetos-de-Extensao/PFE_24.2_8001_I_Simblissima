import styled from 'styled-components';

const Container = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 5px;

}

section {
    padding: 20px;
    border-radius: 8px;
    padding: 15px 20px;
}

h1, h2, h3 {
    color: red;
    margin-bottom: 15px;
}

h2 {
    font-size: 3.0rem;
}

h3 {
    font-size: 2.0rem;
}
`;

export { Container };
