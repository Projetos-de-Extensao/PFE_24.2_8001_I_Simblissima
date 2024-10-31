import styled from 'styled-components';

const Container = styled.div`
          .navbar {
            background-color: #333;
            color: #fff;
            padding: 1em;
            text-align: center;
          }


          .navbar ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }


          .navbar li {
            display: inline-block;
            margin-right: 20px;
          }


          .navbar a {
            color: #fff;
            text-decoration: none;
            transition: color 0.2s ease;
          }


          .navbar a:hover {
            color: #ccc;
          }
`;

export { Container }