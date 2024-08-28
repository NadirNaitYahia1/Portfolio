import React from 'react';
import imgGithub from '../assets/github2.png';
import tshirt from '../assets/tshirt.jfif';

const Projects = () => {
  return (
    <div className='section-with-second-bg py-16 px-8'>
      <h1 className='text-4xl font-bold text-center mb-12'>
        My <span className='text-blue-600'>Projects</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Project Card */}
        <div className=' flex flex-col bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden transition-transform duration-500 hover:transform hover:scale-105 hover:shadow-2xl'>
          <div className='w-full h-48 overflow-hidden'>
            <img src={tshirt} alt="Project 1" className='object-cover w-full h-full transform transition-transform duration-500 hover:scale-110' />
          </div>
          <div className='p-6 flex flex-col flex-grow'>
            <h2 className='text-2xl font-semibold mb-2 text-gray-800'>Project 1</h2>
            <p className='text-gray-600'>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux.
            </p>
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20'></div>
        </div>


 
      </div>
    </div>
  );
};

export default Projects;
