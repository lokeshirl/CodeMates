import React from 'react';

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
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Editor
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Developers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Contact Us
          </a>
        </div>
        {/* button-try-codemate */}
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
        >
          Try CodeMate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
