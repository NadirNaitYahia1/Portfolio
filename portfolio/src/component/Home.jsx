import React from 'react';
import imgGithub from '../assets/github2.png';
import imgLinkedin from '../assets/social.png';
import img from '../assets/wallpaper.png';
import ai from '../assets/AI.jfif';
import python from '../assets/python.png'
import stat from '../assets/statistique.jfif'
import deepLearning from '../assets/deepLearning.jfif'
import web from '../assets/web.jfif'
import react from '../assets/react.png'
import django from '../assets/django.png'
import ing from '../assets/ing.png'


import { motion, useTime, useTransform } from "framer-motion";

const Home = () => {
  const time = useTime();

  const rotateX = useTransform(time, [0, 7000], [0, 360], { clamp: false });
  const rotateY = useTransform(time, [0, 7000], [0, 360], { clamp: false });

  return (
    <div className="home h-screen w-full  flex flex-row">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="w-1/4   flex items-center justify-center">
      <motion.div
          style={{ rotateX, rotateY }}
          className='cube   w-32 h-32 '
        >
          <div className='face front absolute inset-0 bg-cover' style={{ backgroundImage: `url(${ai})` }} />
          <div className='face back absolute inset-0 bg-cover    ' style={{ backgroundImage: `url(${ai})` }} />
          <div className='face left absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${ai})` }} />
          <div className='face right absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${ai})` }} />
          <div className='face top absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${stat})` }} />
          <div className='face bottom absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${stat})` }} />
        </motion.div>
      </div>
      <div className="  flex flex-col justify-center items-center   z-20 w-2/4  ">
        <div className="home-content text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold">Hello, I'm Nadir NAIT YAHIA</h1>
          <p className="text-2xl mt-4">Full Stack Developer</p>
          <p className="text-lg mt-4">
            I'm a Full Stack Developer with 3 years of experience in web development. <br/>
            I have a passion for learning and sharing my knowledge with others as a public speaker and a blogger.
          </p>
          
          <div className="mt-6 flex justify-center">
            <button className="border-2 rounded-full py-2 px-6 mr-4 bg-blue-300 border-blue-300 text-black font-bold">
              Download CV
            </button>
            <button className="border-2 rounded-full py-2 px-6 text-blue-400 font-bold border-blue-400">
              Contact Info
            </button>
          </div>
        </div>

        <div className="home-social flex justify-center mt-8">
          <img src={imgLinkedin} alt="LinkedIn" className="h-14 w-14 mr-4" />
          <img src={imgGithub} alt="GitHub" className="h-14 w-14" />
        </div>
      </div>

      <div className=" flex items-center justify-center w-1/4   ">
        <motion.div
          style={{ rotateX, rotateY }}
          className='cube relative w-32 h-32 transform-style-preserve-3d'
        >
          <div className='face front absolute inset-0 bg-cover' style={{ backgroundImage: `url(${ing})` }} />
          <div className='face back absolute inset-0 bg-cover    ' style={{ backgroundImage: `url(${ing})` }} />
          <div className='face left absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${ing})` }} />
          <div className='face right absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${ing})` }} />
          <div className='face top absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${ing})` }} />
          <div className='face bottom absolute inset-0 bg-cover  ' style={{ backgroundImage: `url(${ing})` }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
