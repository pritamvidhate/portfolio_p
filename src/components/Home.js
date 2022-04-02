import React from 'react';
// import HiArrowNarrowRight from 'react-icons/hi';

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ccd6f6]'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Pritam Vidhate
        </h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>
          I'm Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] '>
          I'm a Web Developer, I'm a Web Developer constantly learning and
          improving my skills. Currently, I'm focused on building Responsive Web
          Application.
        </p>
        <div>
          <button className='text-white border-2 px-6 py-2 flex item-center hover:bg-[#444445]'>
            View Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
