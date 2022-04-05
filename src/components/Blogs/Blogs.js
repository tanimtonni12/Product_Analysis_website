import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-red-800 font-bold my-10'>Blogs</h1>
            </div>
            <div className='grid grid-cols-2 gap-5 m-20 '>
                <div className='p-4 bg-black text-white'>
                    <h1 className='text-left text-2xl font-semibold'>What is context API?</h1>
                    <p className='mt-5 text-justify'>Context API is a react structure that helps us reduce amount of props drilling. Normally if we want to pass a props from one component to its child component we need to pass it using props. For 1 or 2 components its okay, but if the level increases that becomes ugly and unmaintainable over time. In such scenario context api helps us. Where we can create a context and wrap the parent component with the context provider then we can access the context in any child component.</p>
                </div>
                <div className='p-4 bg-black text-white'>
                    <h1 className='text-left text-2xl font-semibold'>What is Semantic tag?</h1>
                    <p className='mt-5 text-justify'>For creating different section in our webpage we use the div tag, but when it comes to readability div tag does fails. So we use semantic tags. For example if we have a navigation bar in our website we can use the nav tag, for sidebar we can use the aside tag and for posts we can use the article tag and by this way it becomes meaningful in both user and machine.</p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;