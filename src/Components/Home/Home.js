import React from 'react';
import Services from './ServiceCard';
import Hero from './Hero';
import Slider from './Slider';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Home = () => {
  const services = useLoaderData()
  console.log(services)
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
        <div className='mb-10'>
           <div className="carousel w-full">
            {
                BannerData.map(slide => <Slider key={slide.id} slide={slide}></Slider>)
            }
           </div>

            <div className='mt-10'>
                <Hero></Hero>
            </div>
            
            <div>
              <div className='grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 gap-5 mt-10'>
                  {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                  }
              </div>
              <div className='flex justify-center mt-5'>
              <Link to='/services' className='btn btn-secondary'>See All</Link>
              </div>
            </div>
        </div>
    );
};

export default Home;