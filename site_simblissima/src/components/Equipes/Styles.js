import styled from 'styled-components';

const Container = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    margin: 0 auto;
    padding: 10px 20px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.3) -3px 0px 12px -3px, rgba(0, 0, 0, 0.2) 3px 0px 12px -3px;
}

h1, h2, h3 {
    color: red;
    margin-bottom: 15px;
}

h2 {
    font-size: 2.0rem;
}

h3 {
    font-size: 1.5rem;
}

p {
    margin: 15px;
    margin-bottom: 15px;
    text-align: justify;
}

// Imagens do carrossel

.custom-carousel .carousel-item {
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.custom-carousel .carousel-item.active {
  opacity: 1;
  position: relative;
  z-index: 2;
}

.custom-carousel .carousel-item-next,
.custom-carousel .carousel-item-prev {
  opacity: 0;
  position: absolute;
  z-index: 1;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 3; // Ensure controls are above the images
}

@media (min-width: 600px) {
    h2 {
    font-size: 2.5rem;
    }

    h3 {
    font-size: 1.5rem;
    }

}

@media (min-width: 1000px) {
    .container {
        max-width: 1200px;
}

`;

export { Container }