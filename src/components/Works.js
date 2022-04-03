import React from 'react';
import WorkImg from '../assets/workImg.jpeg';

const Works = () => {
  return (
    <div className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='py-8'>
          <p className='text-4xl font-bold text-gray-300'>Works</p>
          <p className='py-6'>Check out some of my works</p>
        </div>
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'
        >
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div>
              <span></span>
              <div>
                <a href='/'>
                  <button></button>
                </a>
                <a href='/'>
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
