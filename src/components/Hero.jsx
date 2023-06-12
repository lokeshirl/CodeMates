import React from 'react';
import { hero } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero">
      {/* flex--container */}
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
        {/* left--item */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            CodeMates:{' '}
            <span className="font-medium">
              Embrace Support, Embrace Success
            </span>
          </h1>
          <p className="max-w sm text-center text-darkGrayishBlue md:text-left">
            "Coding made collaborative. Learn, connect, and grow with
            CodeMates."
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/editor"
              className="hidden border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 md:block"
            >
              Try CodeMate
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="">
          <img src={hero} alt="hero-section-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
