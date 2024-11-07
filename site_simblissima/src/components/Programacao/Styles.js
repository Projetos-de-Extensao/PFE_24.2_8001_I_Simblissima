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
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.3) -3px 0px 12px -3px, rgba(0, 0, 0, 0.2) 3px 0px 12px -3px;
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
    font-size: 3.0rem;
}
h3 {
    font-size: 2.0rem;
}
`;

export { Container };
