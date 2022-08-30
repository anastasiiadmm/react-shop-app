import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import images from 'assets/images/carousel-image.jpeg';
import 'scss/_carousel.scss';

const CarouselComponent = () => {
  return (
    <div className="carousel">
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
      >
        <div>
          <img alt="img" src={images} />
          <div className="carousel__legend-carousel">
            <p className="carousel__legend-title">Краски</p>
            <p className="carousel__legend-sub">Идеально подходят для стен и других поверхностей.</p>
            <p>Найди свой идеальный цвет!</p>
          </div>
        </div>
        <div>
          <img alt="img" src={images} />
          <div className="carousel__legend-carousel">
            <p className="carousel__legend-title">Краски</p>
            <p className="carousel__legend-sub">Идеально подходят для стен и других поверхностей.</p>
            <p>Найди свой идеальный цвет!</p>
          </div>
        </div>
        <div>
          <img alt="img" src={images} />
          <div className="carousel__legend-carousel">
            <p className="carousel__legend-title">Краски</p>
            <p className="carousel__legend-sub">Идеально подходят для стен и других поверхностей.</p>
            <p>Найди свой идеальный цвет!</p>
          </div>
        </div>
        <div>
          <img alt="img" src={images} />
          <div className="carousel__legend-carousel">
            <p className="carousel__legend-title">Краски</p>
            <p className="carousel__legend-sub">Идеально подходят для стен и других поверхностей.</p>
            <p>Найди свой идеальный цвет!</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;