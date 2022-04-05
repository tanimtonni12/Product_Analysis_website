import React from 'react';
import img from '../../images/macstudio.1b355172.png'
const Home = () => {
    return (
        <div>
            <div className='flex justify-between items-center ml-48 mr-48 mt-10'>
                <div className='text-left'>
                    <h1 className='font-bold text-4xl'>Apple mac studio</h1>
                    <h1 className='text-4xl font-bold text-red-800'>Filled with performance</h1>
                    <p className='text-justify mt-5 text-xl w-3/4'>The new apple mac studio is a small computer as your previous mac mini but this time it has the power you would've never imagined in such a small form factor. It has the fastest chip (M1 Ultra) which delivers 3.7x more performance with less power than any other chip on this planet.</p>


                </div>
                <div className='w-3/4'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div>
                <h2 className='text-4xl mt-44'>Customer Review</h2>
            </div>
        </div>
    );
};

export default Home;