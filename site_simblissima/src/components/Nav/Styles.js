import styled from 'styled-components';

const Container = styled.div`
          nav {
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 1em;
  justify-content: space-between;
}

nav img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover {
  background-color: #444;
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

.dropdown:hover .dropbtn {
  background-color: #444;
}

`;

export { Container }