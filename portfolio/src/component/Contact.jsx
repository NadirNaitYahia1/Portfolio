import React from 'react';

const Contact = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='text-4xl font-bold text-center mt-6'>
        Contact <span className='text-blue-600'>Me!</span>
      </h1>
      
      <div className='flex justify-center mt-12'>
        <input className="w-1/5 border-2 border-[#2a677d] mx-2 rounded-sm h-10 bg-transparent decoration-none  focus:bg-none" placeholder='Full Name'></input>
        <input className="w-1/5 border-2 border-[#2a677d] mx-2 rounded-sm h-10  bg-transparent  decoration-none " placeholder='Email Adresse'></input>
      </div>

      <div className='flex justify-center'>
        <input className='border-2 border-[#2a677d] h-10 mt-4 w-2/5 mx-auto rounded-sm  bg-transparent  decoration-none' placeholder='Email Object'></input>
      </div>

 
      <div className="flex   items-center mt-2   flex-col">
        <input className="mt-5 w-2/5 h-60 border-2 border-[#2a677d]  bg-transparent  decoration-none focus:border-none" placeholder='Your Message'></input>
        <button 
          type="button" 
          className="mt-4 px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
