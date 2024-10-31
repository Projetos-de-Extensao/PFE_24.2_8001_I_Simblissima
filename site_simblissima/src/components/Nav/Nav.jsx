import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Como Chegar</a></li>
          <li><a href="#">Ingresso</a></li>
          <li><a href="#">Usos Gerais</a></li>
          <li><a href="#">Acomodação</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Equipes</a></li>
        </ul>
      </nav>
      
      <style>
        
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

      </style>
    </div>
  );
};

export default Navbar;