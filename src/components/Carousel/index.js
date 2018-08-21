import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import testImage from 'assets/images/pexels-photo.jpg';

import styles from 'styles/modules/carousel.module.scss';

class Slider extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Carousel showArrows={true}>
          <div>
            <img src={testImage} alt='legend 1' />
            <p className='legend'>Legend 1</p>
          </div>
          <div>
            <img src={testImage} alt='legend 2' />
            <p className='legend'>Legend 2</p>
          </div>
          <div>
            <img src={testImage} alt='legend 3' />
            <p className='legend'>Legend 3</p>
          </div>
          <div>
            <img src={testImage} alt='legend 4' />
            <p className='legend'>Legend 4</p>
          </div>
          <div>
            <img src={testImage} alt='legend 5' />
            <p className='legend'>Legend 5</p>
          </div>
          <div>
            <img src={testImage} alt='legend 6'/>
            <p className='legend' >Legend 6</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

Slider.propTypes = {};

export default Slider;
