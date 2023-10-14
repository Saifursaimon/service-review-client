import React from 'react';
import "./Slider.css"
const Slider = ({slide}) => {
    const {image,id,next,prev} = slide
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
               <div className='carousel-image'>
                <img src={image} alt='slider' className="w-full" />
               </div>
               <div className='absolute text-white left-40 top-1/4'>
                <p className='text-3xl font-semibold'>TRUSTED DENVER TECH CENTER DENTISTS</p>
               </div>
               <div className='absolute text-white left-40 top-1/3'>
                <h1 className='text-8xl'>Exceptional care <br/> for all ages</h1>
               </div>
               <div className='absolute text-white left-40 top-2/3'>
               <button className='btn btn-primary'>Our Services</button>
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-1/2 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle btn-secondary me-5">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle btn-secondary">❯</a>
                </div>
            </div> 
    );
};

export default Slider;