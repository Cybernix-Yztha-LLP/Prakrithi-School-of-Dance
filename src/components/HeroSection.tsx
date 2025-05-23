import React from 'react';
import { Button } from './button'; // Assuming you have a Button component
import { ArrowRight } from 'lucide-react'; // Example icon, replace if needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero.svg')" }} // Ensure hero.svg is in your /public folder
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional: Dark overlay for better text visibility */}
      
      {/* This div pushes content down due to the fixed Navbar and aligns the text block parent */}
      <div className="relative z-10 h-full flex flex-col items-end justify-start pt-[70px] md:pt-[90px]"> {/* Adjusted top padding to match potential Navbar height */}
        {/* This inner div contains the text and applies its specific padding and text alignment */}
        <div className="text-right p-8 md:p-16 lg:p-24 max-w-2xl ml-auto"> {/* Added max-width and ml-auto for better control on large screens */}
          <h1 className="font-labrada text-4xl md:text-6xl font-bold leading-tight">
            Prakrithi School of Dance
          </h1>
          <p className="font-labrada text-2xl md:text-4xl mt-4 mb-8">
            Find the Grace in you
          </p>
        </div>
      </div>

      {/* Buttons positioned at the bottom */}
      <div className="absolute z-10 bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <Button
          variant="outline"
          className="bg-white/80 hover:bg-white text-black font-labrada font-semibold py-3 px-6 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/contact")} // Link to contact page
        >
          Book a workshop
          <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
        <Button
          variant="outline"
          className="bg-white/80 hover:bg-white text-black font-labrada font-semibold py-3 px-6 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out group"
          onClick={() => navigate("/signup")} // Link to signup page
        >
          Sign up
          <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
