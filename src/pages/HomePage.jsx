import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ExplainCodeMates from '../components/ExplainCodeMates';
import Editor from '../components/Editor';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <div>
        {/* navbar */}
        <Navbar />
        {/* hero-section */}
        <Hero />
        {/* explain codemates */}
        <ExplainCodeMates />
        {/* try-editor */}
        <Editor />
        {/* about */}
        <About />
        {/* contact */}
        <Contact />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
