import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';

import './CarouselBox.css';
import img_slide_1 from '../../assets/img_slide_1.jpg';
import img_slide_2 from '../../assets/img_slide_2.jpg';
import img_slide_3 from '../../assets/img_slide_3.jpg';


function CarouselBox() {
  return (
    <div className="CarouselBox">
      <Carousel>
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src={img_slide_1}
            alt=''
          />
          <Carousel.Caption>
              <h3>Cars</h3>
              <p>lol</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src={img_slide_2}
            alt=''
          />
          <Carousel.Caption>
              <h3>Cars 2</h3>
              <p>lols</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src={img_slide_3}
            alt=''
          />
          <Carousel.Caption>
              <h3>Cars</h3>
              <p>lol</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBox;
