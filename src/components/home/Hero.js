import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/a.jpg";
import img2 from "../../assets/b.jpg";
import img3 from "../../assets/c.jpg";

export const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <div className="hero-main-img">
            <h3>Welcome to World best library</h3>
            <p>National Library of Australia</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
