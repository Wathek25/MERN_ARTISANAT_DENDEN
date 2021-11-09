import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselC = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1636476205/Carousel/car1_alg6wb.jpg"
            alt="First slide"
            height="350px"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselC;
