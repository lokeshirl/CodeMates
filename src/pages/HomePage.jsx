import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ExplainCodeMates from '../components/ExplainCodeMates';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import EditorHome from '../components/EditorHome';

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
        <EditorHome />
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
