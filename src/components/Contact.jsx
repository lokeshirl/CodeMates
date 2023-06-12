import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="cta" className="bg-slate-200">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center md:text-4xl md:max-w-xl md:text-left">
          We Empowers Beginners, Start writing code!
        </h2>
        {/* Button */}
        <div>
          <Link
            to="/editor"
            className="hidden border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 md:block"
          >
            Try CodeMate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
