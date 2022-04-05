import React from 'react';
import img from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-red-800 font-bold text-5xl'>Opps!!</h2>
            <img className='mx-auto' src={img} alt="" />
        </div>
    );
};

export default NotFound;