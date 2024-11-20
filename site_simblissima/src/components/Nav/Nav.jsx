import React, { useState, useEffect } from 'react';
import { Container } from './Styles';

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleWindowClick = (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-content')) {
      setShowDropdown(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 140,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <Container>
      <nav className={isSticky ? 'sticky' : ''}>
        <img src="/src/media/logo.png" alt="Logo" />
        <div className="dropdown">
          <button className="dropbtn" onClick={handleDropdownClick}>
            <img src="/src/media/menu.png" alt="Menu" />
          </button>
          <div
            className="dropdown-content"
            style={showDropdown ? { display: 'block' } : { display: 'none' }}
          >
            <a href="#Programacao" onClick={handleLinkClick}>Programação</a>
            <a href="#como-chegar" onClick={handleLinkClick}>Como Chegar</a>
            <a href="#proximidades" onClick={handleLinkClick}>Proximidades</a>
            <a href="#ingresso" onClick={handleLinkClick}>Ingresso</a>
            <a href="#sobre" onClick={handleLinkClick}>Sobre</a>
            <a href="#equipes" onClick={handleLinkClick}>Equipes</a>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Nav;

