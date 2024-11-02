import styled from 'styled-components';

const Container = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;

}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    margin-top: 5px;
}

h1, h2, h3 {
    color: #0056b3;
    margin-bottom: 15px;
}

.section {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    padding: 15px 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid black;
}


ul {
    list-style-type: none;
    padding-left: 0;
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


.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #0056b3;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #004494;
}



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

    .section {
        padding: 15px;
    }
}


`;

export { Container }