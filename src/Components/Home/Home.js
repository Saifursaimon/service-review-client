import React from 'react';
import Services from './Services';
import Hero from './Hero';
import Slider from './Slider';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'

const Home = () => {
    const BannerData = [
        {
          "id": 1,
          "prev": 3,
          "image": img1,
          "next": 2
        },
        {
          "id": 2,
          "prev": 1,
          "image": img2,
          "next": 3
        },
        {
          "id": 3,
          "prev": 2,
          "image": img3,
          "next": 1
        },
       
      ]

    return (
        <div>
           <div className="carousel w-full">
            {
                BannerData.map(slide => <Slider key={slide.id} slide={slide}></Slider>)
            }
           </div>

            <div className='mt-10'>
                <Hero></Hero>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cold-3 gap-5 mt-10'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;