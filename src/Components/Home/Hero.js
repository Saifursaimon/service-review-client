import React from 'react';
import img from '../../assets/hero.jpg'
import { ImCheckboxChecked } from "react-icons/im";
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-blue-800 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Dentistry Done <br/> Right</h1>
                        <p className="py-6">Adults and kids, we welcome patients of all ages! Our <br/>
                         team is passionate about building lifetime relationships <br/>
                          through positive experiences, featuring:</p>
                        <ul>
                            <li className='flex items-center gap-3'> <ImCheckboxChecked className=' text-orange-400'></ImCheckboxChecked> Transparent Pricing</li>
                            <li className='flex items-center gap-3'> <ImCheckboxChecked className=' text-orange-400'></ImCheckboxChecked> Unparalleled Warranty</li>
                            <li className='flex items-center gap-3'> <ImCheckboxChecked className=' text-orange-400'></ImCheckboxChecked> FREE Whitening (for life!)</li>
                        </ul>
                        <p className="py-6">“Our word is our worth. We promise to do it right, <br/>
                         timely, and for a fair price.”</p>
                    </div>
                </div>
            </div>
    );
};

export default Hero;