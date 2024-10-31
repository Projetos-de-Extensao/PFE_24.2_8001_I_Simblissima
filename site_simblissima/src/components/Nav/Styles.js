import styled from 'styled-components';

const Container = styled.div`
          nav {
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 1em;
}

nav img {
  margin-right: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

nav li {
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #ccc;
}

`;

export { Container }