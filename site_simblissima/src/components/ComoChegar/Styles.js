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

h1, h2, h3 {
    color: red;
    margin-bottom: 15px;
}

p {
    margin-bottom: 15px;
    text-align: justify;
}
ul {
    list-style-type: none;
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

/* Mapa */
.mapa {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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

export { Container }