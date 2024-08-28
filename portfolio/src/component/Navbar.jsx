import React from 'react';

const Navbar = () => {
  return (
    <nav className="pt-7 fixed w-full flex items-center justify-between px-4 py-4 z-100 nav z-50" >
      <div className="logo text-3xl font-bold ms-4">
        Nadir.
      </div>

      <div className="hidden md:flex ">
        <ul className="flex space-x-8 font-medium text-white">
          <li>
            <a href="#" className="block py-2 px-3 hover:text-blue-700 text-xl">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 hover:text-blue-700 text-xl">Education & Experiences</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 hover:text-blue-700 text-xl">Skills</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 hover:text-blue-700 text-xl">Projects & Certification</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 hover:text-blue-700 text-xl">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Add a mobile menu button or toggle here */}
      </div>
    </nav>
  );
};

export default Navbar;
