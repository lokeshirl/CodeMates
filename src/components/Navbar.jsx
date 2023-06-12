import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    /* Navbar */
    <nav className="relative container mx-auto">
      {/* flex--container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div>
          <img
            className="max-w-[15rem]"
            src="src\assets\codeMates-logo-cover.png"
            alt="codemates-logo"
          />
        </div>
        {/* menu--items */}
        <div className="hidden md:flex space-x-6 text-2xl">
          <a href="#hero" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="#editor" className="hover:text-darkGrayishBlue">
            Editor
          </a>
          <a href="#about" className="hover:text-darkGrayishBlue">
            Developers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Contact Us
          </a>
        </div>
        {/* button-try-codemate */}
        {/* <a
          href="#"
          className="hidden border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 md:block"
        >
          Try CodeMate
        </a> */}
        <Link
          to="/editor"
          className="hidden border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 md:block"
        >
          Try CodeMate
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
