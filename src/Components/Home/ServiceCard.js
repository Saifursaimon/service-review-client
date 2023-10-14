import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

const ServiceCard = ({service}) => {
    const {name,img,rating,price,details} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className=' h-1/3'><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
               {name}
                <div className="badge badge-secondary"><Stars rating={rating}></Stars></div>
                    </h2>
                    <p>
                    {
                        details.length > 100 ?
                        <>{details.slice(0, 100)+'....'} <Link className='font-semibold underline'>Read More</Link> </>
                        :
                        <>{details}</>
                    }
                    </p>
                    <div className="card-actions items-center justify-between">
                    <div className="badge badge-outline font-bold">$ {price}</div> 
                    <button className='btn btn-neutral'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;