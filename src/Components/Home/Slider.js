import React from 'react';
import "./Slider.css"
const Slider = ({slide}) => {
    const {image,id,next,prev} = slide
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
               <div className='carousel-image'>
                <img src={image} className="w-full" />
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div> 
    );
};

export default Slider;