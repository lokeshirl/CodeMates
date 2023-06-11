import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img
              src="src\assets\vector\codeMates-logo-default-monochrome-white.svg"
              className="h-8"
              alt=""
            />
          </div>
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            {/* Link 1 */}
            <a href="#">
              <img
                src="src\assets\vector\img\icon-facebook.svg"
                alt=""
                className="h-8"
              />
            </a>
            {/* Link 2 */}
            <a href="#">
              <img
                src="src\assets\vector\img\icon-youtube.svg"
                alt=""
                className="h-8"
              />
            </a>
            {/* Link 3 */}
            <a href="#">
              <img
                src="src\assets\vector\img\icon-twitter.svg"
                alt=""
                className="h-8"
              />
            </a>
            {/* Link 4 */}
            <a href="#">
              <img
                src="src\assets\vector\img\icon-instagram.svg"
                alt=""
                className="h-8"
              />
            </a>
          </div>
        </div>
        {/* List Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Editor
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
            <a href="#" className="hover:text-brightRed">
              Contact
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright © 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
