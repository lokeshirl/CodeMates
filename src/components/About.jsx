import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
      {/* Container to heading and testm blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          About Us - Yes we 4 are the Developers of CodeMate!
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img
              src="src\assets\avatar-lokesh.jpg"
              className="w-16 -mt-14 rounded-full"
              alt=""
            />
            <h5 className="text-lg font-bold">Lokesh Kumar Jha</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Coding made collaborative. Learn, connect, and grow with
              CodeMates."
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img
              src="src\assets\avatar-ankur.jpg"
              className="w-16 -mt-14 rounded-full"
              alt=""
            />
            <h5 className="text-lg font-bold">Ankur Singh</h5>
            <p className="text-sm text-darkGrayishBlue">
              "CodeMates: Empowering Beginners, Connecting Coding Enthusiasts"
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img
              src="src\assets\avatar-mukund.png"
              className="w-16 -mt-14 rounded-full"
              alt=""
            />
            <h5 className="text-lg font-bold">Mukund Thakur</h5>
            <p className="text-sm text-darkGrayishBlue">
              "CodeMates: Empowering Beginners, Inspiring Collaboration"
            </p>
          </div>
          {/* Testimonial 4 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img
              src="src\assets\avatar-ashutosh.jpg"
              className="w-16 -mt-14 rounded-full"
              alt=""
            />
            <h5 className="text-lg font-bold">Ashutosh</h5>
            <p className="text-sm text-darkGrayishBlue">
              "CodeMates: Building Confidence, One Line of Code at a Time"
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="my-16">
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

export default About;
