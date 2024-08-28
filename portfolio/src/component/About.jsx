import React from 'react'

const About = () => {
  return (
    <div className='section-with-second-bg'>
      <div className='container mx-auto py-20'>
        <h1 className='text-4xl font-bold text-center'>About Me</h1>
        <p className='text-center mt-4'>I'm a Full Stack Developer with 3 years of experience in web development. <br/>I have a passion for learning and sharing my knowledge with others a public speaker and a blogger.</p>
        <div className='flex justify-center mt-6'>
          <button className='border-2 rounded-full p-4 mr-2 bg-blue-400 border-blue-600 text-black font-bold'>Download CV</button>
          <button className='border rounded-full p-4 border-blue-600 text-blue-400 font-bold ml-4'>Contact Info</button>
        </div>
      </div>
    </div>
  )
}

export default About