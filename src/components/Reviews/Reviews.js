import React from 'react';

import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>

            <h1 className='text-4xl text-red-800 font-bold mt-10 mb-16'>Our Customers Reviews</h1>
            <div className='grid grid-cols-2'>
                {
                    reviews.map(review => <Review key={review.id}
                        review={review}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;