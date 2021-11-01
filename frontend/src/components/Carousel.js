import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselC = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635736253/Carousel/pottery11_hxaoxs.jpg"
            alt="First slide"
            height="450px"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635736280/Carousel/DSC_02911_v6zo3y.jpg"
            alt="Second slide"
            height="450px"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselC;
