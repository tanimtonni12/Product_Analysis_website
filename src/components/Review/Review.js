
import React from 'react';

const Review = (props) => {
    const { name, img, comment, rating } = props.review;
    return (
        <div className='ml-20 mr-20 mb-20'>

            <div className='p-5 rounded-md bg-black text-white'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <img className='h-12 w-12 rounded-full' src={img} alt="" />

                        <h2 className='ml-3'>{name}</h2>
                    </div>
                    <div>
                        <p className='mr-3'><small>Ratings: {rating}</small></p>
                    </div>

                </div>
                <p className='mt-5 text-justify ml-10'>{comment}</p>

            </div>

        </div>


    );
};

export default Review;