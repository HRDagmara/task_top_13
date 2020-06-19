import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styles from "./_carousel.scss";

function Carouselslide() {
  return (<div className={styles}>
    <Carousel id="carousel">
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=400"
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>Twój nowy sklep Sellingo.pl</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames senectus sed in feugiat tincidunt nec turpis dis sagittis.
          Venenatis fusce eleifend egestas pulvinar pharetra, augue. Felis, suspendisse viverra senectus orci nisl fermentum
nunc nunc. Donec tempus, hendrerit nisi vestibulum, est, interdum cursus habitant est.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1591857172651-1c9fde426c84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=400"
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Carouselslide;
