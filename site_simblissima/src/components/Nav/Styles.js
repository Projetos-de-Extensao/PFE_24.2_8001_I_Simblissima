import styled from 'styled-components';

const Container = styled.div`
     nav {
       display: flex;
       align-items: center;
       background-color: #333;
       padding: 1em;
       justify-content: space-between;
       position: fixed;
       width: 100%;
       margin-bottom: 40px;
       top: 0;
       left: 0;
     }

     nav img {
       height: 40px;
     }

     .dropdown {
       position: relative;
       display: inline-block;
       height: 20px;
       width: 20px;
     }

     .dropbtn {
       background-color: #333;
       color: #fff;
       height: 20px;
       width: 20px;
       border: none;
       cursor: pointer;
     }

     .dropbtn img {
       height: 20px;
       width: 20px;
       display: flex;
       justify-content: center;
       align-items: center;
     }

     .dropdown-content {
       display: none;
       position: absolute;
       background-color: #333;
       min-width: 160px;
       box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
       right: 0;
     }

     .dropdown-content a {
       color: #fff;
       padding: 12px 16px;
       text-decoration: none;
       display: block;
     }

     .dropdown-content a:hover {
       background-color: #444;
     }

     .dropdown:hover .dropdown-content {
       display: block;
     }
`;

export { Container }
