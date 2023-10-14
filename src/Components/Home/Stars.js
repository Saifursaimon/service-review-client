import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar} from 'react-icons/ai';

const Stars = ({rating}) => {


    const ratingStars = Array.from({length:5 }, (v,index) => {

        let numbers = index + 0.5

        return (
            <span  key={index}>
                {
                    rating >= index + 1 ? <FaStar/>  : rating >= numbers ?  <FaStarHalfAlt/>: <AiOutlineStar/>
                }
            </span>
        )

    })


    return (
        <div className='flex'>
            {ratingStars}
        </div>
    );
};

export default Stars;